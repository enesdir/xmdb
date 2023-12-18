import { prisma } from '@/server/prisma'
import { comparePassword, hashPassword } from '@/server/utils/passwordUtils'
import { createUserSelect, generateUsername } from './usersUtils'

import type { User } from 'next-auth'

export const createUser = async ({
	username,
	name,
	email,
	password,
}: {
	username: string
	name: string
	email: string
	password: string
}) =>
	prisma.user.create({
		data: { username, name, email, password: await hashPassword(password) },
		select: createUserSelect(),
	})

export const updateUser = (
	id: string,
	{
		username,
		name,
		email,
		image,
		biography,
	}: {
		username?: string
		name?: string
		email?: string
		image?: string | null
		biography?: string | null
	}
) =>
	prisma.user.update({
		where: { id },
		data: { username, name, email, image, biography },
		select: createUserSelect(),
	})

export const getUserByCredentials = async ({
	username,
	password,
}: {
	username: string
	password: string
}) => {
	const user = await prisma.user.findFirst({
		where: { OR: [{ username }, { email: username }] },
		select: createUserSelect(),
	})

	if (!user?.password || !(await comparePassword(password, user.password))) {
		return null
	}

	return user
}

export const getUserByUsername = (username: string, followerId?: string) =>
	prisma.user.findUnique({
		where: { username },
		select: createUserSelect({ followerId }),
	})

export const searchUsers = (search: string, followerId?: string) =>
	prisma.user.findMany({
		where: {
			OR: [
				{ username: { contains: search, mode: 'insensitive' } },
				{ name: { contains: search, mode: 'insensitive' } },
			],
		},
		take: 4,
		select: createUserSelect({ followerId }),
	})

export const initCreatedUser = async ({ id, email, username }: User) => {
	if (username || !email) return null

	return prisma.user.update({
		where: { id },
		data: { username: await generateUsername({ email }) },
		select: createUserSelect(),
	})
}

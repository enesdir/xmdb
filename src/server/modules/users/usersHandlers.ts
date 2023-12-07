import { TRPCError } from '@trpc/server'

import { isPrismaError, prismaErrors } from '@/utils/prismaErrors'
import { mapPrismaUserToUser } from './usersMapper'
import { createUser, getUserByUsername, searchUsers, updateUser } from './usersService'

import type { ProtectedContext, TRPCContext } from '@/server/trpc'
import type {
	CreateUserInput,
	GetUserByUsernameInput,
	SearchUsersInput,
	UpdateUserInput,
} from './usersSchemas'

export const createUserHandler = async ({ username, name, email, password }: CreateUserInput) => {
	try {
		return mapPrismaUserToUser(await createUser({ username, name, email, password }))
	} catch (err) {
		if (isPrismaError(err, prismaErrors.UniqueKeyViolation)) {
			throw new TRPCError({
				code: 'CONFLICT',
				message: 'User already exists!',
				cause: err,
			})
		}

		throw err
	}
}

export const updateUserHandler = async (
	{ session }: ProtectedContext,
	{ username, name, email, image, biography }: UpdateUserInput
) => {
	try {
		return mapPrismaUserToUser(
			await updateUser(session.user.id, {
				username,
				name,
				email,
				image,
				biography,
			})
		)
	} catch (err) {
		if (isPrismaError(err, prismaErrors.UniqueKeyViolation)) {
			throw new TRPCError({
				code: 'CONFLICT',
				message: 'User already exists!',
				cause: err,
			})
		}

		throw err
	}
}

export const getUserByUsernameHandler = async (
	{ session }: TRPCContext,
	{ username }: GetUserByUsernameInput
) => {
	const user = await getUserByUsername(username, session?.user.id)

	if (!user) {
		throw new TRPCError({
			code: 'NOT_FOUND',
			message: 'User not found!',
		})
	}

	return mapPrismaUserToUser(user, { self: session?.user.id === user.id })
}
export const searchUsersHandler = async ({ session }: TRPCContext, { search }: SearchUsersInput) => {
	const users = await searchUsers(search, session?.user.id)

	return users.map((user) => mapPrismaUserToUser(user))
}

import type { Prisma } from '@prisma/client'
import type { User } from './usersSchemas'
import type { createUserSelect } from './usersUtils'

type PrismaUser = Prisma.UserGetPayload<{
	select: ReturnType<typeof createUserSelect>
}>

export const mapPrismaUserToUser = (
	{
		id,
		name,
		email,
		username,
		image,
		biography,
		follower,
		_count: { show: shows, follower: followers, following },
	}: PrismaUser,
	{ self }: { self?: boolean } = {}
): User => ({
	id,
	name,
	username,
	image,
	biography,
	follow: Boolean(follower?.length),
	statistics: { shows, followers, following },
	...(self && { email }),
})

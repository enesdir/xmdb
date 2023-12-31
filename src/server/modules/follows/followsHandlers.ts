import { mapPrismaUserToUser } from '@/server/modules/users/usersMapper'
import { createFollow, deleteFollow, getFollows } from './followsService'

import type { ProtectedContext, TRPCContext } from '@/server/trpc'
import type { CreateFollowInput, DeleteFollowInput, GetFollowsInput } from './followsSchemas'

export const getFollowersHandler = async ({ session }: TRPCContext, { userId }: GetFollowsInput) => {
	const follows = await getFollows(
		{
			followingId: userId,
		},
		session?.user.id
	)
	const followers = follows.map(({ follower }) => follower).filter(Boolean)
	// @ts-expect-error:todo
	return followers.map((user) => mapPrismaUserToUser(user))
}

export const getFollowingHandler = async ({ session }: TRPCContext, { userId }: GetFollowsInput) => {
	const follows = await getFollows(
		{
			followerId: userId,
		},
		session?.user.id
	)
	const following = follows.map(({ following }) => following).filter(Boolean)
	// @ts-expect-error:todo
	return following.map((user) => mapPrismaUserToUser(user))
}

export const createFollowHandler = async ({ session }: ProtectedContext, { userId }: CreateFollowInput) => {
	await createFollow({ followerId: session.user.id, followingId: userId })
}

export const deleteFollowHandler = async ({ session }: ProtectedContext, { userId }: DeleteFollowInput) => {
	await deleteFollow({ followerId: session.user.id, followingId: userId })
}

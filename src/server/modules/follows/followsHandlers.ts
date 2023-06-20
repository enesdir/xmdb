import type { ProtectedContext, TRPCContext } from '@/server/createTRPCContext'
import { mapPrismaUserToUser } from '@/server/modules/users/usersMapper'
import type { CreateFollowInput, DeleteFollowInput, GetFollowsInput } from './followsSchemas'
import { createFollow, deleteFollow, getFollows } from './followsService'

export const getFollowersHandler = async ({ session }: TRPCContext, { userId }: GetFollowsInput) => {
	const follows = await getFollows(
		{
			followingId: userId,
		},
		session?.user.id
	)
	const followers = follows.map(({ follower }) => follower).filter(Boolean)

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

	return following.map((user) => mapPrismaUserToUser(user))
}

export const createFollowHandler = async ({ session }: ProtectedContext, { userId }: CreateFollowInput) => {
	await createFollow({ followerId: session.user.id, followingId: userId })
}

export const deleteFollowHandler = async ({ session }: ProtectedContext, { userId }: DeleteFollowInput) => {
	await deleteFollow({ followerId: session.user.id, followingId: userId })
}

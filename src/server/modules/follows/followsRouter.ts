import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/trpc'
import {
	createFollowHandler,
	deleteFollowHandler,
	getFollowersHandler,
	getFollowingHandler,
} from './followsHandlers'
import { createFollowSchema, deleteFollowSchema, followsSchema, getFollowsSchema } from './followsSchemas'

export const followsRouter = createTRPCRouter({
	getFollowers: publicProcedure
		.input(getFollowsSchema)
		.output(followsSchema)
		.query(({ ctx, input }) => getFollowersHandler(ctx, input)),
	getFollowing: publicProcedure
		.input(getFollowsSchema)
		.output(followsSchema)
		.query(({ ctx, input }) => getFollowingHandler(ctx, input)),
	createFollow: protectedProcedure
		.input(createFollowSchema)
		.mutation(({ ctx, input }) => createFollowHandler(ctx, input)),
	deleteFollow: protectedProcedure
		.input(deleteFollowSchema)
		.mutation(({ ctx, input }) => deleteFollowHandler(ctx, input)),
})

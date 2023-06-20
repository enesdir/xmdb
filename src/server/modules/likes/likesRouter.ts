import { createTRPCRouter, protectedProcedure } from '@/server/trpc'
import { createLikeHandler, deleteLikeHandler } from './likesHandler'
import { createLikeSchema, deleteLikeSchema } from './likesSchemas'

export const likesRouter = createTRPCRouter({
	create: protectedProcedure
		.input(createLikeSchema)
		.mutation(({ ctx, input }) => createLikeHandler(ctx, input)),
	delete: protectedProcedure
		.input(deleteLikeSchema)
		.mutation(({ ctx, input }) => deleteLikeHandler(ctx, input)),
})

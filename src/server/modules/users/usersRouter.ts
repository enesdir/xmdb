import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/trpc'
import { createUserHandler, getUserByUsernameHandler, updateUserHandler } from './usersHandlers'
import { createUserSchema, getUserByUsernameSchema, updateUserSchema, userSchema } from './usersSchemas'

export const usersRouter = createTRPCRouter({
	create: publicProcedure
		.input(createUserSchema)
		.output(userSchema)
		.mutation(({ input }) => createUserHandler(input)),
	update: protectedProcedure
		.input(updateUserSchema)
		.output(userSchema)
		.mutation(({ ctx, input }) => updateUserHandler(ctx, input)),
	getByUsername: publicProcedure
		.input(getUserByUsernameSchema)
		.output(userSchema)
		.query(({ ctx, input }) => getUserByUsernameHandler(ctx, input)),
})

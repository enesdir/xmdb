import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/trpc'
import {
	createUserHandler,
	getUserByUsernameHandler,
	searchUsersHandler,
	updateUserHandler,
} from './usersHandlers'
import {
	allUsersSchema,
	createUserSchema,
	getUserByUsernameSchema,
	searchUsersSchema,
	updateUserSchema,
	userSchema,
} from './usersSchemas'

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
	search: publicProcedure
		.input(searchUsersSchema)
		.output(allUsersSchema)
		.query(({ ctx, input }) => searchUsersHandler(ctx, input)),
})

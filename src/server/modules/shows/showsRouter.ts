import { z } from 'zod'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/trpc'
import {
	deleteShowByIdHandler,
	getAllShowsHandler,
	getShowByIdHandler,
	getShowByIdUserHandler,
	getShowsByUserHandler,
} from './showsHandler'
import {
	deleteShowByIdSchema,
	getAllShowsSchema,
	getShowByIdSchema,
	getShowByIdUserSchema,
	getShowsByUserSchema,
	showSchema,
} from './showsSchemas'

export const showsRouter = createTRPCRouter({
	getAll: publicProcedure
		.input(getAllShowsSchema)
		.output(z.array(showSchema))
		.query(({ input }) => getAllShowsHandler(input)),
	getShowsByUser: publicProcedure
		.input(getShowsByUserSchema)
		.output(z.array(showSchema))
		.query(({ input }) => getShowsByUserHandler(input)),
	getById: publicProcedure
		.input(getShowByIdSchema)
		.output(showSchema)
		.query(({ input }) => getShowByIdHandler(input)),
	getByIdUser: publicProcedure
		.input(getShowByIdUserSchema)
		.output(showSchema)
		.query(({ ctx, input }) => getShowByIdUserHandler(ctx, input)),
	deleteById: protectedProcedure
		.input(deleteShowByIdSchema)
		.output(showSchema)
		.mutation(({ ctx, input }) => deleteShowByIdHandler(ctx, input)),
})

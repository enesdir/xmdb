import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/trpc'
import {
	deleteShowByIdHandler,
	getAllLatestShowsHandler,
	getAllShowsHandler,
	getShowByIdHandler,
	getShowByIdUserHandler,
	getShowsByUserHandler,
	searchShowsHandler,
} from './showsHandler'
import {
	allShowsSchema,
	deleteShowByIdSchema,
	getAllLatestShowsSchema,
	getAllShowsSchema,
	getShowByIdSchema,
	getShowByIdUserSchema,
	getShowsByUserSchema,
	latestShowsSchema,
	searchShowsSchema,
	showSchema,
} from './showsSchemas'

export const showsRouter = createTRPCRouter({
	getAll: publicProcedure
		.input(getAllShowsSchema)
		.output(allShowsSchema)
		.query(({ input }) => getAllShowsHandler(input)),
	getAllLatest: publicProcedure
		.input(getAllLatestShowsSchema)
		.output(latestShowsSchema)
		.query(({ ctx, input }) => getAllLatestShowsHandler(ctx, input)),
	getShowsByUser: publicProcedure
		.input(getShowsByUserSchema)
		.output(allShowsSchema)
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
	search: publicProcedure
		.input(searchShowsSchema)
		.output(allShowsSchema)
		.query(({ ctx, input }) => searchShowsHandler(ctx, input)),
})

import { createTRPCRouter, publicProcedure } from '@/server/trpc'
import { getDiscoverHandler, getMovieByIdHandler, getShowByIdHandler } from './tmdbHandler'
import {
	discoverPaginatedResultSchema,
	getByTmdbIDSchema,
	getDiscoverSchema,
	movieDetailsSchema,
	showDetailsSchema,
} from './tmdbSchemas'

export const tmdbRouter = createTRPCRouter({
	getMovieById: publicProcedure
		.input(getByTmdbIDSchema)
		.output(movieDetailsSchema)
		.query(({ input }) => getMovieByIdHandler(input)),
	getShowById: publicProcedure
		.input(getByTmdbIDSchema)
		.output(showDetailsSchema)
		.query(({ input }) => getShowByIdHandler(input)),
	discover: publicProcedure
		.input(getDiscoverSchema)
		.output(discoverPaginatedResultSchema)
		.query(({ input }) => getDiscoverHandler(input)),
})

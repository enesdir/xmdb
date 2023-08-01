import { createTRPCRouter, publicProcedure } from '@/server/trpc'
import { getMovieByIdHandler } from './tmdbHandler'
import { getByTmdbIDSchema, movieDetailsSchema } from './tmdbSchemas'

export const tmdbRouter = createTRPCRouter({
	getMovieById: publicProcedure
		.input(getByTmdbIDSchema)
		.output(movieDetailsSchema)
		.query(({ input }) => getMovieByIdHandler(input)),
})

import { createTRPCRouter, publicProcedure } from '@/server/trpc'
import { getMovieByIdHandler } from './tmdbHandler'
import { getMovieByIDSchema, movieDetailsSchema } from './tmdbSchemas'

export const tmdbRouter = createTRPCRouter({
	getMovieById: publicProcedure
		.input(getMovieByIDSchema)
		.output(movieDetailsSchema)
		.query(({ input }) => getMovieByIdHandler(input)),
})

import { TRPCError } from '@trpc/server'
import { isAxiosError } from 'axios'

import { GetMovieByIDSchema, MovieDetails } from './tmdbSchemas'
import { getMovieById } from './tmdbService'

export const getMovieByIdHandler = async ({ movieId }: GetMovieByIDSchema): Promise<MovieDetails> => {
	try {
		// @ts-expect-error: TODO
		const { data } = await getMovieById<MovieDetails>(movieId, { append_to_response: 'credits,external_ids' })
		return Promise.resolve(data)
	} catch (error) {
		if (isAxiosError(error)) {
			throw new TRPCError({
				code: 'NOT_FOUND',
			})
		}
	}
	throw new TRPCError({
		code: 'BAD_REQUEST',
	})
}

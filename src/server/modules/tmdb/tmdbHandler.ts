import type { GetByTmdbIDSchema, MovieDetails } from './tmdbSchemas'

import { TRPCError } from '@trpc/server'
import { isAxiosError } from 'axios'

import { getMovieById } from './tmdbService'

export const getMovieByIdHandler = async ({ tmdbId }: GetByTmdbIDSchema): Promise<MovieDetails> => {
	try {
		const { data } = await getMovieById<MovieDetails>(tmdbId, { append_to_response: 'credits,external_ids' })
		return Promise.resolve(data)
	} catch (error) {
		if (isAxiosError(error)) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				cause: error.response?.data.code,
				message: error.response?.data.status_message,
			})
		}
	}
	throw new TRPCError({
		code: 'BAD_REQUEST',
	})
}

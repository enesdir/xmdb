import type { Discover, GetByTmdbIDSchema, GetDiscoverSchema, MovieDetails, ShowDetails } from './tmdbSchemas'

import { TRPCError } from '@trpc/server'
import { isAxiosError } from 'axios'

import { getDiscover, getMovieById, getShowById } from './tmdbService'

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

export const getShowByIdHandler = async ({ tmdbId }: GetByTmdbIDSchema): Promise<ShowDetails> => {
	try {
		const { data } = await getShowById<ShowDetails>(tmdbId, { append_to_response: 'credits,external_ids' })
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

export const getDiscoverHandler = async ({ type, options }: GetDiscoverSchema): Promise<Discover> => {
	try {
		const { data } = await getDiscover<Discover>(type, {
			include_adult: false,
			// with_genres: options.genres.length > 0 ? options.genres.join(',') : undefined,
			// primary_release_year: options.year,
			sort_by: options.sortBy ?? 'popularity.desc',
			page: options.page,
		})
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

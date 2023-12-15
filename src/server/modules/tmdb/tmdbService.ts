import { tmdb } from '@/server/tmdb'

import type { AxiosResponse } from 'axios'
import type { GetByTmdbIDSchema, GetDiscoverSchema } from './tmdbSchemas'

type S = 'credits' | 'videos' | 'watch/providers' | 'recommendations' | 'external_ids'
type AppendToResponseType =
	| `${S}`
	| `${S},${S}`
	| `${S},${S},${S}`
	| `${S},${S},${S},${S}`
	| `${S},${S},${S},${S},${S}`

type GetMovieQueryProps = {
	append_to_response: AppendToResponseType
}

export const getMovieById = async <ResType>(
	tmdbId: GetByTmdbIDSchema['tmdbId'],
	query?: GetMovieQueryProps
): Promise<AxiosResponse<ResType>> => tmdb.get(`/movie/${tmdbId}`, { params: query })

export const getShowById = async <ResType>(
	tmdbId: GetByTmdbIDSchema['tmdbId'],
	query?: GetMovieQueryProps
): Promise<AxiosResponse<ResType>> => tmdb.get(`/tv/${tmdbId}`, { params: query })

export const getDiscover = async <ResType>(
	type: GetDiscoverSchema['type'],
	query?: GetDiscoverSchema['options']
): Promise<AxiosResponse<ResType>> =>
	tmdb.get(`/discover/${type}`, {
		params: {
			with_genres: query?.genres?.length ? query?.genres.join(',') : undefined,
			primary_release_year: query?.year,
			sort_by: query?.sortBy,
			page: query?.page,
		},
	})

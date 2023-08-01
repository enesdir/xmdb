import type { AxiosResponse } from 'axios'
import type { GetByTmdbIDSchema } from './tmdbSchemas'

import { tmdb } from '@/server/tmdb'

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

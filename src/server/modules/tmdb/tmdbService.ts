import { tmdb } from '@/server/tmdb'

type S = 'credits' | 'videos' | 'watch/providers' | 'recommendations' | 'external_ids'
type AppendToResponseType =
	| `${S}`
	| `${S},${S}`
	| `${S},${S},${S}`
	| `${S},${S},${S},${S}`
	| `${S},${S},${S},${S},${S}`

type getMovieQueryProps = {
	append_to_response: AppendToResponseType
}
export const getMovieById = async <ResType>(id: number, query?: getMovieQueryProps): Promise<ResType> =>
	tmdb.get(`/movie/${id}`, { params: query })

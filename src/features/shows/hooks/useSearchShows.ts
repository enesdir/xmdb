import { trpc } from '@/lib/utils/trpc'

export const useSearchShows = (search: string) => {
	const { data: shows = [], ...rest } = trpc.shows.search.useQuery(
		{ search },
		{ enabled: Boolean(search), cacheTime: 0 }
	)

	return { shows, ...rest }
}

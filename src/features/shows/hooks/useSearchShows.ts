import { client } from '@/trpc/client'

export const useSearchShows = (search: string) => {
	const { data: shows = [], ...rest } = client.shows.search.useQuery({ search }, { enabled: Boolean(search) })

	return { shows, ...rest }
}

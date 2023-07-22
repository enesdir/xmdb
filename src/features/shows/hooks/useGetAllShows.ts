import { trpc } from '@/lib/trpc'

export const useGetUserShows = () => {
	const { data: shows = [], ...rest } = trpc.shows.getAll.useQuery({ cacheTime: 0 })

	return { shows, ...rest }
}

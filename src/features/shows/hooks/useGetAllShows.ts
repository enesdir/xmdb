import { client } from '@/trpc/client'

export const useGetUserShows = () => {
	const { data: shows = [], ...rest } = client.shows.getAll.useQuery()

	return { shows, ...rest }
}

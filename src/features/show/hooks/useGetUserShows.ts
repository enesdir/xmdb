import { client } from '@/trpc/client'

export const useGetUserShows = (username: string | null) => {
	const { data: shows = [], ...rest } = client.shows.getShowsByUser.useQuery(
		{
			username: username || '',
		},
		{ enabled: Boolean(username) }
	)

	return { shows, ...rest }
}

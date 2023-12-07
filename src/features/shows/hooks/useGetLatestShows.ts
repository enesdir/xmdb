import { client } from '@/trpc/client'

export const useGetLatestShows = () => {
	const { data, ...rest } = client.shows.getAllLatest.useInfiniteQuery(
		{ limit: 3 },
		{ getNextPageParam: ({ nextCursor }) => nextCursor }
	)

	const shows = data?.pages.flatMap(({ items }) => items) || []

	return { shows, ...rest }
}

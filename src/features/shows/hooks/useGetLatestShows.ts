import { trpc } from '@/lib/trpc'

export const useGetLatestShows = () => {
	const { data, ...rest } = trpc.shows.getAllLatest.useInfiniteQuery(
		{ limit: 3 },
		{ cacheTime: 0, getNextPageParam: ({ nextCursor }) => nextCursor }
	)

	const shows = data?.pages.flatMap(({ items }) => items) || []

	return { shows, ...rest }
}

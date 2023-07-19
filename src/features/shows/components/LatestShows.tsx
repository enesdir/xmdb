'use client'

import { Spinner } from '@/components/Spinner'
import { useGetLatestShows } from '@/features/shows/hooks/useGetLatestShows'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { LatestShowList } from './LatestShowList'

export const LatestShows = () => {
	const { shows, hasNextPage, isLoading, isFetchingNextPage, fetchNextPage } = useGetLatestShows()

	const loading = isLoading || isFetchingNextPage

	useInfiniteScroll(() => {
		if (!loading && hasNextPage) {
			fetchNextPage()
		}
	})

	return (
		<>
			<LatestShowList shows={shows} />
			{loading && <Spinner center />}
		</>
	)
}

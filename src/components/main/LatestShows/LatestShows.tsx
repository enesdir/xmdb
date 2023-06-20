'use client'

import { Spinner } from '@/components/ui/Spinner/Spinner'
import { useGetLatestShows } from '@/hooks/useGetLatestShows'
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

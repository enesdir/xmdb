'use client'

import { Spinner } from '@/components/Spinner'
import { useGetLatestShows } from '@/features/shows/hooks/useGetLatestShows'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { LatestShowList } from './LatestShowList'

export const LatestShows = () => {
	const { shows, hasNextPage, isPending, isFetchingNextPage, fetchNextPage } = useGetLatestShows()

	const loading = isPending || isFetchingNextPage

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

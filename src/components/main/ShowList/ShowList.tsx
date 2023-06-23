import { Fragment } from 'react'
import { EmptyShowsAlert } from '@/components/main/UserShows/UserShowList/EmptyShowsAlert'
import type { Show } from '@/server/modules/shows/showsSchemas'
import { ShowCard } from './ShowCard/ShowCard'

type ShowListProps = Readonly<{
	shows: Show[]
}>

export const ShowList = ({ shows }: ShowListProps) => {
	if (shows.length === 0) {
		return <EmptyShowsAlert />
	}

	return (
		<ol className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
			{shows.map((show) => (
				<Fragment key={show.id}>
					<ShowCard show={show} />
				</Fragment>
			))}
		</ol>
	)
}

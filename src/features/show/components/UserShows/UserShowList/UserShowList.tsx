import { Fragment } from 'react'

import { EmptyShowsAlert } from '@/features/shows/components/EmptyShowsAlert'
import { UserShowListItem } from './UserShowListItem/UserShowListItem'

import type { Show } from '@/server/modules/shows/showsSchemas'

type ShowListProps = Readonly<{
	shows: Show[]
}>

export const UserShowList = ({ shows }: ShowListProps) => {
	if (shows.length === 0) {
		return <EmptyShowsAlert />
	}

	return (
		<ol className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4'>
			{shows.map((show) => (
				<Fragment key={show.id}>
					<UserShowListItem show={show} />
				</Fragment>
			))}
		</ol>
	)
}

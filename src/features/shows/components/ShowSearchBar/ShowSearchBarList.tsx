import type { Show } from '@/server/modules/shows/showsSchemas'

import { ShowSearchBarListItem } from './ShowSearchBarListItem'

type ShowSearchBarListProps = Readonly<{
	onItemClick?: () => void
	shows: Show[]
}>

export const ShowSearchBarList = ({ onItemClick, shows }: ShowSearchBarListProps) => {
	if (shows.length === 0) {
		return <p className='my-2.5 text-center font-medium text-white'>Show not found</p>
	}

	return (
		<ol className='divide-y'>
			{shows.map((show) => (
				<ShowSearchBarListItem key={show.id} show={show} onClick={onItemClick} />
			))}
		</ol>
	)
}

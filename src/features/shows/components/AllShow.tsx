import { Fragment } from 'react'

import { ShowCard } from '@/features/show/'
import { EmptyShowsAlert } from '@/features/shows/'
import { RouterOutputs } from '@/trpc/shared'

type ShowListProps = Readonly<{
	shows: NonNullable<RouterOutputs['shows']['getAll']>
}>

export const ShowList = ({ shows }: ShowListProps) => {
	if (shows.length === 0) {
		return <EmptyShowsAlert />
	}

	return (
		<ol className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{shows.map((show) => (
				<Fragment key={show.id}>
					<ShowCard show={show} />
				</Fragment>
			))}
		</ol>
	)
}

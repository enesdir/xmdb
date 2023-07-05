import { SingleShow } from '@/features/show/'
import type { Show } from '@/server/modules/shows/showsSchemas'

type LatestShowListProps = Readonly<{
	shows: Show[]
}>

export const LatestShowList = ({ shows }: LatestShowListProps) => (
	<ol className='divide-y'>
		{shows.map((show) => (
			<li key={show.id} className='py-7'>
				<SingleShow show={show} />
			</li>
		))}
	</ol>
)

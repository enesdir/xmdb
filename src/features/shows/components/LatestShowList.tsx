import { ShowCard } from '@/features/show/'
import { RouterOutputs } from '@/trpc/shared'

type LatestShowListProps = Readonly<{
	shows: NonNullable<RouterOutputs['shows']['getAllLatest']['items']>
}>

export const LatestShowList = ({ shows }: LatestShowListProps) => {
	return (
		<ol className='divide-y'>
			{shows.map((show) => (
				<li key={show.id} className='py-7'>
					<ShowCard show={show} />
				</li>
			))}
		</ol>
	)
}

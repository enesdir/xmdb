import type { Show } from '@/server/modules/shows/showsSchemas'
import { ShowCta } from './ShowCta'
import { ShowDetails } from './ShowDetails'
import { ShowStatistics } from './ShowStatistics'

type ShowBodyProps = Readonly<{
	show: Show
}>

export const ShowBody = ({ show }: ShowBodyProps) => {
	return (
		<div className='mb-4 border-b pb-4'>
			<div className='mx-auto flex w-full flex-col items-center sm:flex-row sm:items-start'>
				<section className='grow space-y-4 '>
					<ShowCta show={show} />
					<ShowStatistics show={show} />
					<ShowDetails show={show} />
				</section>
			</div>
		</div>
	)
}

import type { Show } from '~/src/server/modules/shows/showsSchemas'
import { AccessControl } from '../AccessControl'
import { DeleteShowButton } from '../DeleteShowButton'
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
				<section className='grow-0 space-y-4 sm:max-w-xs'>
					<AccessControl createdID={show.author.id}>
						<DeleteShowButton show={show} />
					</AccessControl>
				</section>
			</div>
		</div>
	)
}

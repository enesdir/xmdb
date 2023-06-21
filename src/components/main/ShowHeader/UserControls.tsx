import type { Show } from '@/server/modules/shows/showsSchemas'
import { AccessControl } from '../AccessControl'
import { DeleteShowButton } from '../ShowHeader/DeleteShowButton'

type ShowBodyProps = Readonly<{
	show: Show
}>
export const UserControls = ({ show }: ShowBodyProps) => {
	return (
		<AccessControl createdID={show.author.id}>
			<section className='space-y-4 sm:max-w-xs'>
				<DeleteShowButton show={show} />
			</section>
		</AccessControl>
	)
}

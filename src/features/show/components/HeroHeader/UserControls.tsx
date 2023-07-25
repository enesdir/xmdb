import { AccessControl } from '@/components/AccessControl'
import type { Show } from '@/server/modules/shows/showsSchemas'
import { DeleteShowButton } from './DeleteShowButton'

type ShowBodyProps = Readonly<{
	show: Show
}>
export const UserControls = ({ show }: ShowBodyProps) => {
	return (
		<AccessControl createdID={show.author.id} permissions={['isLoggedIn', 'isOwner']}>
			<section className='space-y-4 md:max-w-xs'>
				<DeleteShowButton show={show} />
			</section>
		</AccessControl>
	)
}

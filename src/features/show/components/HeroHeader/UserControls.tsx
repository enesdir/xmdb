import { AccessControl } from '@/components/AccessControl'
import { DeleteShowButton } from './DeleteShowButton'

import type { Show } from '@/server/modules/shows/showsSchemas'

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

import { useSession } from 'next-auth/react'

import { AccessControl } from '@/components/AccessControl'
import { DeleteShowButton } from './DeleteShowButton'

import type { Show } from '@/server/modules/shows/showsSchemas'

type ShowBodyProps = Readonly<{
	show: Show
}>
export const UserControls = ({ show }: ShowBodyProps) => {
	const { data: session } = useSession()
	return (
		<AccessControl createdID={show.author.id} actions={['delete']} resource='app_post' user={session?.user}>
			<section className='space-y-4 md:max-w-xs'>
				<DeleteShowButton show={show} />
			</section>
		</AccessControl>
	)
}

import Link from 'next/link'

import type { Show } from '@/server/modules/shows/showsSchemas'

type UsersSearchBarListItemProps = Readonly<{
	onClick?: () => void
	show: Show
}>

export const ShowSearchBarListItem = ({ onClick, show }: UsersSearchBarListItemProps) => (
	<li onClick={onClick} className='flex items-center justify-between p-2.5 hover:bg-white/10'>
		<Link
			href={`/user/${String(show.author.username)}/show/${String(show.id)}`}
			className='flex flex-1 items-center gap-x-2 overflow-hidden'
		>
			<p>Poster</p>
			<p className='truncate font-medium text-white'>{show.title}</p>
		</Link>
	</li>
)

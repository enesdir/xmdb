import Link from 'next/link'
import { UserAvatar } from '@/components/'
import { FollowButton } from '@/features/user/components/FollowButton'
import type { User } from '@/server/modules/users/usersSchemas'

type UsersSearchBarListItemProps = Readonly<{
	onClick?: () => void
	user: User
}>

export const UserSearchBarListItem = ({ onClick, user }: UsersSearchBarListItemProps) => (
	<li onClick={onClick} className='flex items-center justify-between p-2.5 hover:bg-white/10'>
		<Link href={`/${user.username}`} className='flex flex-1 items-center gap-x-2 overflow-hidden'>
			<UserAvatar user={user} />
			<p className='truncate font-medium text-white'>{user.username}</p>
		</Link>
		<FollowButton user={user} />
	</li>
)

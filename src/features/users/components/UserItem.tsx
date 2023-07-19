import Link from 'next/link'
import { UserAvatar } from '@/components/UserAvatar'
import { FollowButton } from '@/features/user/components/FollowButton'
import type { User } from '@/server/modules/users/usersSchemas'

type UserItemProps = Readonly<{
	user: User
}>

export const UserItem = ({ user }: UserItemProps) => (
	<li className='flex gap-x-0.5 py-4'>
		<Link href={`/${user.username}`} className='flex flex-1 items-center gap-x-2.5 overflow-hidden'>
			<UserAvatar user={user} size='sm' />
			<h3 className='truncate font-medium'>{user.username}</h3>
		</Link>
		<FollowButton user={user} />
	</li>
)

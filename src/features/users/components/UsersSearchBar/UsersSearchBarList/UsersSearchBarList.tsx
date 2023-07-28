import type { User } from '@/server/modules/users/usersSchemas'

import { UserSearchBarListItem } from './UsersSearchBarListItem'

type UsersSearchBarListProps = Readonly<{
	onItemClick?: () => void
	users: User[]
}>

export const UsersSearchBarList = ({ onItemClick, users }: UsersSearchBarListProps) => {
	if (users.length === 0) {
		return <p className='my-2.5 text-center font-medium text-white'>Users not found</p>
	}

	return (
		<ol className='divide-y'>
			{users.map((user) => (
				<UserSearchBarListItem key={user.id} user={user} onClick={onItemClick} />
			))}
		</ol>
	)
}

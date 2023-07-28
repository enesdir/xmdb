import type { User } from '@/server/modules/users/usersSchemas'

import { EmptyDataAlert } from '@/components/EmptyDataAlert'
import { UserItem } from './UserItem'

type UserListProps = Readonly<{
	alertMessage: string
	users: User[]
}>

export const UserList = ({ alertMessage, users }: UserListProps) => {
	if (users.length === 0) {
		return <EmptyDataAlert message={alertMessage} />
	}

	return (
		<ul className='max-h-96 divide-y overflow-auto'>
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</ul>
	)
}

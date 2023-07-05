import type { Session } from 'next-auth'
import { Dropdown, UserAvatar } from '@/components/'

type UserMenuButtonProps = Readonly<{
	user: Session['user']
}>

export const UserMenuButton = ({ user }: UserMenuButtonProps) => (
	<Dropdown.Button>
		<UserAvatar user={user} />
	</Dropdown.Button>
)

import type { User } from '@/server/modules/users/usersSchemas'
import { FollowButton } from '../FollowButton'

type UserCtaProps = Readonly<{
	user: User
}>

export const UserCta = ({ user }: UserCtaProps) => (
	<div className='flex items-center justify-between gap-x-3 sm:justify-start'>
		<h2 className='truncate text-lg font-medium'>{user.username}</h2>
		<FollowButton user={user} />
	</div>
)
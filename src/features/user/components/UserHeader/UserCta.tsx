import { FollowButton } from '../FollowButton'

import type { User } from '@/server/modules/users/usersSchemas'

type UserCtaProps = Readonly<{
	user: User
}>

export const UserCta = ({ user }: UserCtaProps) => (
	<div className='flex items-center justify-between gap-x-3 md:justify-start'>
		<h2 className='truncate text-lg font-medium text-white'>{user.username}</h2>
		<FollowButton user={user} />
	</div>
)

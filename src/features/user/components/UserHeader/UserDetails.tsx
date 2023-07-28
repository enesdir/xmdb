import type { User } from '@/server/modules/users/usersSchemas'

import { DEFAULT_PROFILE_BIOGRAPHY } from '@/lib/constants'

type UserDetailsProps = Readonly<{
	user: User
}>

export const UserDetails = ({ user: { name, biography } }: UserDetailsProps) => (
	<>
		<h3 className='font-medium'>{name}</h3>
		<div className='mt-0.5 whitespace-pre-line break-all text-justify'>
			{biography || DEFAULT_PROFILE_BIOGRAPHY}
		</div>
	</>
)

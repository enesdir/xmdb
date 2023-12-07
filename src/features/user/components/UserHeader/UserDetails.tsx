import { DEFAULT_PROFILE_BIOGRAPHY } from '@/constants/appConfigurations'

import type { User } from '@/server/modules/users/usersSchemas'

type UserDetailsProps = Readonly<{
	user: User
}>

export const UserDetails = ({ user: { name, biography } }: UserDetailsProps) => (
	<>
		<h3 className='font-medium text-slate-50'>{name}</h3>
		<div className='mt-0.5 whitespace-pre-line break-all text-justify text-slate-100'>
			{biography || DEFAULT_PROFILE_BIOGRAPHY}
		</div>
	</>
)

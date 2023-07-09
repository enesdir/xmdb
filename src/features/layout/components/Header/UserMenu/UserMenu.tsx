'use client'

import { useSession } from 'next-auth/react'
import { AccessControl, Dropdown } from '@/components/'
import { ProfileButton } from './ProfileButton'
import { SignOutButton } from './SignOutButton'
import { UserMenuButton } from './UserMenuButton'

export const UserMenu = () => {
	const { data } = useSession()

	return (
		<AccessControl createdID={data?.user.id}>
			<Dropdown>
				{data && <UserMenuButton user={data.user} />}
				<Dropdown.Items>
					{data?.user.username && <ProfileButton username={data.user.username} />}
					<SignOutButton />
				</Dropdown.Items>
			</Dropdown>
		</AccessControl>
	)
}

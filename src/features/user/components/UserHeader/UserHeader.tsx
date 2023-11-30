import { AccessControl } from '@/components/AccessControl'
import { UserAvatar } from '@/components/UserAvatar'
import { CreateShowButton } from '@/features/show/'
import { UserCta } from './UserCta'
import { UserDetails } from './UserDetails'
import { UserEditorPanel } from './UserEditorPanel'
import { UserStatistics } from './UserStatistics/UserStatistics'

import type { User } from '@/server/modules/users/usersSchemas'

type UserHeaderProps = Readonly<{
	user: User
}>

export const UserHeader = ({ user }: UserHeaderProps) => (
	<div className='mb-4 border-b pb-4'>
		<div className='relative mx-auto flex w-full flex-col items-center justify-start space-x-6 md:flex-row md:items-start'>
			<UserEditorPanel user={user}>
				<UserAvatar user={user} size='xl' />
			</UserEditorPanel>

			<section className='grow space-y-4 md:max-w-xs'>
				<UserCta user={user} />
				<UserStatistics user={user} />
				<UserDetails user={user} />
			</section>

			<AccessControl createdID={user.id} permissions={['isLoggedIn', 'isOwner']}>
				<section className='absolute right-0 space-y-4 md:max-w-xs'>
					<CreateShowButton />
				</section>
			</AccessControl>
		</div>
	</div>
)

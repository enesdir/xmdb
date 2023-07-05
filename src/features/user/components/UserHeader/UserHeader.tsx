import { AccessControl, UserAvatar } from '@/components/'
import { CreateShowButton } from '@/features/show/'
import type { User } from '@/server/modules/users/usersSchemas'
import { UserCta } from './UserCta'
import { UserDetails } from './UserDetails'
import { UserEditorPanel } from './UserEditorPanel'
import { UserStatistics } from './UserStatistics/UserStatistics'

type UserHeaderProps = Readonly<{
	user: User
}>

export const UserHeader = ({ user }: UserHeaderProps) => (
	<div className='mb-4 border-b pb-4'>
		<div className='relative mx-auto flex w-full flex-col items-center justify-start space-x-6 sm:flex-row sm:items-start'>
			<UserEditorPanel user={user}>
				<UserAvatar user={user} size='xl' />
			</UserEditorPanel>

			<section className='grow space-y-4 sm:max-w-xs'>
				<UserCta user={user} />
				<UserStatistics user={user} />
				<UserDetails user={user} />
			</section>

			<AccessControl createdID={user.id}>
				<section className='absolute right-0 space-y-4 sm:max-w-xs'>
					<CreateShowButton />
				</section>
			</AccessControl>
		</div>
	</div>
)

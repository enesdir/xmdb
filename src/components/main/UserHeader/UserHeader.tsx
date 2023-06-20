import { UserAvatar } from '@/components/common/UserAvatar'
import type { User } from '@/server/modules/users/usersSchemas'
import { CreateShowButton } from '../CreateShowButton'
import { UserCta } from './UserCta'
import { UserDetails } from './UserDetails'
import { UserEditorPanel } from './UserEditorPanel'
import { UserStatistics } from './UserStatistics/UserStatistics'

type UserHeaderProps = Readonly<{
	user: User
}>

export const UserHeader = ({ user }: UserHeaderProps) => (
	<div className='mb-4 border-b pb-4'>
		<div className='mx-auto flex w-full flex-col items-center justify-between gap-y-4  sm:flex-row sm:items-start'>
			<UserEditorPanel user={user}>
				<UserAvatar user={user} size='xl' />
			</UserEditorPanel>

			<section className='grow space-y-4 sm:max-w-xs'>
				<UserCta user={user} />
				<UserStatistics user={user} />
				<UserDetails user={user} />
			</section>
			<section className='space-y-4 sm:max-w-xs'>
				<CreateShowButton user={user} />
			</section>
		</div>
	</div>
)

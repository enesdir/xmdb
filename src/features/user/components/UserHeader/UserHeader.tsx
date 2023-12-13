'use client'

import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { AccessControl } from '@/components/AccessControl'
import { UserAvatar } from '@/components/UserAvatar'
import { CreateShowButton } from '@/features/show/'
import { client } from '@/trpc/client'
import { PageParams } from '@/types/pageParams'
import { UserCta } from './UserCta'
import { UserDetails } from './UserDetails'
import { UserEditorPanel } from './UserEditorPanel'
import { UserStatistics } from './UserStatistics/UserStatistics'

export const UserHeader = () => {
	const { data: session } = useSession()
	const username = useParams<PageParams<['username']>>()
	const [user] = client.users.getByUsername.useSuspenseQuery(username)
	return (
		<div className='border-b py-10'>
			<div className='relative mx-auto flex w-full flex-col items-center justify-start space-x-6 md:flex-row md:items-start'>
				<UserEditorPanel user={user}>
					<UserAvatar user={user} size='xl' />
				</UserEditorPanel>

				<section className='grow space-y-4 md:max-w-xs'>
					<UserCta user={user} />
					<UserStatistics user={user} />
					<UserDetails user={user} />
				</section>

				<AccessControl createdID={user.id} actions={['create']} resource='app_post' user={session?.user}>
					<section className='absolute right-0 space-y-4 md:max-w-xs'>
						<CreateShowButton />
					</section>
				</AccessControl>
			</div>
		</div>
	)
}

'use client'

import { LoadingContent } from '~/src/components/LoadingContent'
import { useGetUserShows } from '@/features/show/hooks/useGetUserShows'
import type { User } from '@/server/modules/users/usersSchemas'
import { UserShowList } from './UserShowList/UserShowList'

type UserShowsProps = Readonly<{
	user: User
}>

export const UserShows = ({ user: { username } }: UserShowsProps) => {
	const { shows, isLoading } = useGetUserShows(username || '')

	return (
		<LoadingContent isLoading={isLoading}>
			<UserShowList shows={shows} />
		</LoadingContent>
	)
}
'use client'

import { LoadingContent } from '@/components/LoadingContent'
import { useGetUserShows } from '@/features/show/hooks/useGetUserShows'
import { UserShowList } from './UserShowList/UserShowList'

import type { User } from '@/server/modules/users/usersSchemas'

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

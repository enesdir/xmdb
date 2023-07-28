'use client'

import type { User } from '@/server/modules/users/usersSchemas'

import { LoadingContent } from '@/components/LoadingContent'
import { useGetUserShows } from '@/features/show/hooks/useGetUserShows'
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

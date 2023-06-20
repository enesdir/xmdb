'use client'

import { LoadingContent } from '@/components/common/LoadingContent'
import { useGetUserShows } from '@/hooks/useGetUserShows'
import type { User } from '@/server/modules/users/usersSchemas'
import { ShowList } from './ShowList/ShowList'

type UserShowsProps = Readonly<{
	user: User
}>

export const UserShows = ({ user: { username } }: UserShowsProps) => {
	const { shows, isLoading } = useGetUserShows(username || '')

	return (
		<LoadingContent isLoading={isLoading}>
			<ShowList shows={shows} />
		</LoadingContent>
	)
}

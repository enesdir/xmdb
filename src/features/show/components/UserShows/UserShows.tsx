'use server'

import { EmptyShowsAlert } from '@/features/shows/components/EmptyShowsAlert'
import { server } from '@/trpc/server'
import { PageParams } from '@/types/pageParams'
import { UserShowList } from './UserShowList/UserShowList'

// type UserShowsProps = Readonly<{
// 	username: PageParams<['username']>
// }>
export default async function UserShows(username: PageParams<['username']>) {
	const shows = await server.shows.getShowsByUser.query(username)
	if (shows.length === 0) return <EmptyShowsAlert />
	return (
		<div className='pt-4'>
			<UserShowList />
		</div>
	)
}

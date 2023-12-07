'use client'

import { Fragment } from 'react'
import { useParams } from 'next/navigation'

import { client } from '@/trpc/client'
import { PageParams } from '@/types/pageParams'
import { UserShowListItem } from './UserShowListItem/UserShowListItem'

export const UserShowList = () => {
	const username = useParams<PageParams<['username']>>()
	const [shows] = client.shows.getShowsByUser.useSuspenseQuery(username)
	if (!shows) {
		return null
	}

	return (
		<ol className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4'>
			{shows.map((show) => (
				<Fragment key={show.id}>
					<UserShowListItem show={show} />
				</Fragment>
			))}
		</ol>
	)
}

import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import { PageContainer } from '@/components/Containers/PageContainer'
import { SectionContainer } from '@/components/Containers/SectionContainer'
import { Spinner } from '@/components/Spinner'
import { DEFAULT_PROFILE_BIOGRAPHY, PROJECT_NAME } from '@/constants/appConfigurations'
import { env } from '@/env.mjs'
import UserShows from '@/features/show/components/UserShows/UserShows'
import { UserHeader } from '@/features/user/components/UserHeader/UserHeader'
import { server } from '@/trpc/server'
import { PageParams } from '@/types/pageParams'

import type { Metadata } from 'next'

export const generateMetadata = async ({ params: { username } }: UserPageProps): Promise<Metadata> => {
	const { username: userName, name, image, biography } = await server.users.getByUsername.query({ username })

	const [firstName, lastName] = name?.split(' ') || []

	return {
		title: username,
		openGraph: {
			type: 'profile',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/user/${String(userName)}`,
			description: biography || DEFAULT_PROFILE_BIOGRAPHY,
			firstName,
			lastName,
			...(userName && { userName, title: userName }),
			...(image && { images: { url: image, width: 144, height: 144 } }),
		},
	}
}

type UserPageProps = Readonly<{
	params: PageParams<['username']>
}>

export default async function UserPage({ params: { username } }: UserPageProps) {
	const user = await server.users.getByUsername.query({ username })
	if (!user) {
		notFound()
	}

	return (
		<>
			<SectionContainer>
				<UserHeader />
			</SectionContainer>
			<PageContainer center>
				<Suspense fallback={<Spinner size='xl' center />}>
					<UserShows username={username} />
				</Suspense>
			</PageContainer>
		</>
	)
}

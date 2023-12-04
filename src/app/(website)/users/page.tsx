import { SectionContainer } from '@/components/Containers'
import { Title } from '@/components/Title'
import { env } from '@/env.mjs'
import { PROJECT_NAME } from '@/lib/constants'

import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: 'Shows & Movies & Series',
		openGraph: {
			type: 'website',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/users/shows`,
		},
	}
}

export default async function LatestShowsPage() {
	return (
		<SectionContainer variant='secondary'>
			<Title className='text-3xl font-semibold'>Users</Title>
			<Title className='text-3xl font-semibold'>TODO: future implementation for list of user</Title>
		</SectionContainer>
	)
}

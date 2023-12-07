import { SectionContainer } from '@/components/Containers'
import { Title } from '@/components/Title'
import { PROJECT_NAME } from '@/constants/appConfigurations'
import { env } from '@/env.mjs'
import { LatestShows } from '@/features/shows'

import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: 'Latest Shows & Movies & Series',
		openGraph: {
			type: 'website',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/shows`,
		},
	}
}

export default async function LatestShowsPage() {
	return (
		<SectionContainer variant='secondary'>
			<Title className='text-3xl font-semibold'>Latest Shows</Title>
			<LatestShows />
		</SectionContainer>
	)
}

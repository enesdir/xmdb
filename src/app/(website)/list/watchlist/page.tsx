// TODO: for future implementations
import { SectionContainer } from '@/components/Containers/SectionContainer'
import { PROJECT_NAME } from '@/constants/appConfigurations'
import { env } from '@/env.mjs'

import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: 'Show',
		openGraph: {
			type: 'article',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/list/watchlist`,
		},
	}
}

export default async function WatchlistPage() {
	return (
		<>
			<SectionContainer>
				<p>user watchlist</p>
			</SectionContainer>
		</>
	)
}

import type { Metadata } from 'next'
import { env } from '@/env.mjs'
import { LatestShows } from '@/features/shows'
import { PROJECT_NAME } from '@/lib/constants'

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: 'Shows & Movies & Series',
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
		<>
			<h1 className='text-3xl font-semibold'>Latest Shows</h1>
			<LatestShows />
		</>
	)
}

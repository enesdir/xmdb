import type { Metadata } from 'next'

import { LatestShows } from '@/features/shows'
import { PROJECT_NAME } from '@/lib/constants'
import { getBaseUrl } from '@/utils/getBaseUrl'

export const generateMetadata = async (): Promise<Metadata> => {
	const host = getBaseUrl(true)
	return {
		title: 'Shows & Movies & Series',
		openGraph: {
			type: 'website',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${host}/shows`,
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

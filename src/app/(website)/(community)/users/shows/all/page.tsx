import type { Metadata } from 'next'

import { ShowList } from '@/features/shows/'
import { PROJECT_NAME } from '@/lib/constants'
import { getAllShows } from '@/lib/show'
import { getBaseUrl } from '@/utils/getBaseUrl'

export const generateMetadata = async (): Promise<Metadata> => {
	const host = getBaseUrl(true)
	return {
		title: 'Shows & Movies & Series',
		openGraph: {
			type: 'website',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${host}/users/shows/all`,
		},
	}
}

export default async function AllShowPage() {
	const shows = await getAllShows()
	return (
		<>
			<ShowList shows={shows} />
		</>
	)
}

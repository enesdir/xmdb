import { env } from '@/env.mjs'
import { ShowList } from '@/features/shows/'
import { PROJECT_NAME } from '@/lib/constants'
import { getAllShows } from '@/lib/show'

import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: 'Shows & Movies & Series',
		openGraph: {
			type: 'website',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/users/shows/all`,
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

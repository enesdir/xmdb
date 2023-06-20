import type { Metadata } from 'next'
import { ShowList } from '@/components/main/UserShows/ShowList/ShowList'
import { env } from '@/env.mjs'
import { PROJECT_NAME } from '@/lib/constants'
import { getAllShows } from '@/lib/show'

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

export default async function ShowsPage() {
	const shows = await getAllShows()

	return (
		<>
			<ShowList shows={shows} />
		</>
	)
}

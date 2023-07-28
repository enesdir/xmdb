import type { Metadata } from 'next'
import { PageParams } from '@/types/pageParams'

import { SectionContainer } from '@/components/SectionContainer'
import { PROJECT_NAME } from '@/lib/constants'
import { getShowById } from '@/lib/show'
import { getBaseUrl } from '@/utils/getBaseUrl'

export const generateMetadata = async ({ params: { showId } }: FullCreditsPageProps): Promise<Metadata> => {
	const host = getBaseUrl(true)
	const {
		id: showID,
		title,

		author: { id: UserID },
	} = await getShowById(Number(showId))
	return {
		title: `${title} - Photo Gallery`,
		openGraph: {
			type: 'article',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${host}/user/${String(UserID)}/${String(showID)}/fullcredits`,
		},
	}
}

type FullCreditsPageProps = Readonly<{
	params: PageParams<['username', 'showId']>
}>

export default async function FullCreditsPage({ params }: FullCreditsPageProps) {
	console.log(params)
	return (
		<>
			<SectionContainer>
				<h1>Full Cast & Crew</h1>
				<p>username:{params.username} </p>
				<p>show id:{params.showId} </p>
			</SectionContainer>
		</>
	)
}

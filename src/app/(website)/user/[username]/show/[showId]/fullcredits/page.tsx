import { SectionContainer } from '@/components/Containers/SectionContainer'
import { PROJECT_NAME } from '@/constants/appConfigurations'
import { env } from '@/env.mjs'
import { server } from '@/trpc/server'
import { PageParams } from '@/types/pageParams'

import type { Metadata } from 'next'

export const generateMetadata = async ({ params: { showId } }: FullCreditsPageProps): Promise<Metadata> => {
	const {
		id: showID,
		title,

		author: { id: UserID },
	} = await server.shows.getById.query({ id: Number(showId) })
	return {
		title: `${title} - Photo Gallery`,
		openGraph: {
			type: 'article',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/user/${String(UserID)}/${String(showID)}/fullcredits`,
		},
	}
}

type FullCreditsPageProps = Readonly<{
	params: PageParams<['username', 'showId']>
}>

export default async function FullCreditsPage({ params }: FullCreditsPageProps) {
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

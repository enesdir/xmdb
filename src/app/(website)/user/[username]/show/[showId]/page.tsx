'use server'

import { PageContainer } from '@/components/Containers/PageContainer'
import { SectionContainer } from '@/components/Containers/SectionContainer'
import { PROJECT_NAME } from '@/constants/appConfigurations'
import { env } from '@/env.mjs'
import { ShowCastList } from '@/features/show/'
import { ShowHero } from '@/features/show/components/ShowHero'
import { server } from '@/trpc/server'
import { PageParams } from '@/types/pageParams'

import type { Metadata } from 'next'

export const generateMetadata = async ({ params }: ShowPageProps): Promise<Metadata> => {
	const {
		id: showID,
		title,
		description,
		author: { id: UserID },
	} = await server.shows.getById.query({ id: Number(params.showId) })

	return {
		title: title,
		openGraph: {
			type: 'article',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/user/${String(UserID)}/${String(showID)}`,
			description: description,
		},
	}
}

type ShowPageProps = Readonly<{
	params: PageParams<['showId']>
}>

export default async function ShowPage({ params }: ShowPageProps) {
	const show = await server.shows.getById.query({ id: Number(params.showId) })

	return (
		<>
			<SectionContainer>
				<ShowHero show={show} />
			</SectionContainer>
			<PageContainer center>
				<ShowCastList />
			</PageContainer>
		</>
	)
}

import type { Metadata } from 'next'
import { PageParams } from '@/types/pageParams'

import { PageContainer } from '@/components/PageContainer'
import { env } from '@/env.mjs'
import { ShowCastList } from '@/features/show/'
import { ShowHero } from '@/features/show/components/ShowHero'
import { PROJECT_NAME } from '@/lib/constants'
import { getShowById } from '@/lib/show'

export const generateMetadata = async ({ params }: ShowPageProps): Promise<Metadata> => {
	const {
		id: showID,
		title,
		description,
		author: { id: UserID },
	} = await getShowById(Number(params.showId))

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
	const show = await getShowById(Number(params.showId))

	return (
		<>
			<ShowHero show={show} />
			<PageContainer>
				<ShowCastList />
			</PageContainer>
		</>
	)
}

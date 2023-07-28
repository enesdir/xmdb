import type { Metadata } from 'next'
import { PageParams } from '@/types/pageParams'

import { PageContainer } from '@/components/PageContainer'
import { ShowCastList } from '@/features/show/'
import { ShowHero } from '@/features/show/components/ShowHero'
import { PROJECT_NAME } from '@/lib/constants'
import { getShowById } from '@/lib/show'
import { getBaseUrl } from '@/utils/getBaseUrl'

export const generateMetadata = async ({ params }: ShowPageProps): Promise<Metadata> => {
	const host = getBaseUrl(true)
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
			url: `${host}/user/${String(UserID)}/${String(showID)}`,
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

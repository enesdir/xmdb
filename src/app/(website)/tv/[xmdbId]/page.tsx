// TODO: for future implementations
import type { Metadata } from 'next'
import { PageParams } from '@/types/pageParams'

import { SectionContainer } from '@/components/Containers/SectionContainer'
import { env } from '@/env.mjs'
import { PROJECT_NAME } from '@/lib/constants'
import { getShowById } from '@/lib/tmdb'

export const generateMetadata = async ({ params: { xmdbId } }: XMDBShowPageProps): Promise<Metadata> => {
	return {
		title: 'Show',
		openGraph: {
			type: 'article',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/tv/${String(xmdbId)}`,
		},
	}
}

type XMDBShowPageProps = Readonly<{
	params: PageParams<['xmdbId']>
}>

export default async function XMDBShowPage({ params: { xmdbId } }: XMDBShowPageProps) {
	const show = await getShowById(Number(xmdbId))
	return (
		<>
			<SectionContainer>
				<p>celebrity: {JSON.stringify(show)}</p>
			</SectionContainer>
		</>
	)
}

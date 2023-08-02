// TODO: for future implementations
import type { Metadata } from 'next'
import { PageParams } from '@/types/pageParams'

import { SectionContainer } from '@/components/SectionContainer'
import { env } from '@/env.mjs'
import { PROJECT_NAME } from '@/lib/constants'
import { getDiscover } from '@/lib/tmdb'

export const generateMetadata = async ({ params: { xmdbId } }: XMDBShowPageProps): Promise<Metadata> => {
	return {
		title: 'Discover',
		openGraph: {
			type: 'article',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/discover/tv/${String(xmdbId)}`,
		},
	}
}

type XMDBShowPageProps = Readonly<{
	params: PageParams<['xmdbId']>
}>

export default async function XMDBShowPage({ params: { xmdbId } }: XMDBShowPageProps) {
	const discoverData = await getDiscover({ type: 'tv', options: { page: 1 } })
	return (
		<>
			<SectionContainer>
				<p>page param:{xmdbId}</p>
				<p>data: {JSON.stringify(discoverData)}</p>
			</SectionContainer>
		</>
	)
}
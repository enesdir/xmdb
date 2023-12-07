// TODO: for future implementations
import { SectionContainer } from '@/components/Containers/SectionContainer'
import { PROJECT_NAME } from '@/constants/appConfigurations'
import { env } from '@/env.mjs'
import { server } from '@/trpc/server'
import { PageParams } from '@/types/pageParams'

import type { Metadata } from 'next'

export const generateMetadata = async ({ params: { xmdbId } }: XMDBShowPageProps): Promise<Metadata> => {
	return {
		title: 'Show',
		openGraph: {
			type: 'article',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/title/${String(xmdbId)}`,
		},
	}
}

type XMDBShowPageProps = Readonly<{
	params: PageParams<['xmdbId']>
}>

export default async function XMDBShowPage({ params: { xmdbId } }: XMDBShowPageProps) {
	const movie = await server.tmdb.getMovieById.query({ tmdbId: Number(xmdbId) })
	return (
		<>
			<SectionContainer>
				<p>celebrity: {JSON.stringify(movie)}</p>
			</SectionContainer>
		</>
	)
}

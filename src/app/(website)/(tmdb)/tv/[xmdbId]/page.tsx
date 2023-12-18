// TODO: for future implementations
import { notFound } from 'next/navigation'

import { PageContainer } from '@/components/Containers'
import { PROJECT_NAME } from '@/constants/appConfigurations'
import { env } from '@/env.mjs'
import { Cast } from '@/features/tmdb/components/Cast/Cast'
import { ShowHero } from '@/features/tmdb/components/ShowHero'
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
			url: `${env.NEXT_PUBLIC_BASE_URL}/tv/${String(xmdbId)}`,
		},
	}
}

type XMDBShowPageProps = Readonly<{
	params: PageParams<['xmdbId']>
}>

export default async function XMDBShowPage({ params: { xmdbId } }: XMDBShowPageProps) {
	const show = await server.tmdb.getShowById.query({ tmdbId: Number(xmdbId) })
	if (!show) {
		notFound()
	}
	return (
		<>
			<PageContainer full>
				<ShowHero show={show} />
			</PageContainer>
			<PageContainer center>
				<Cast cast={show.credits.cast!} />
			</PageContainer>
		</>
	)
}

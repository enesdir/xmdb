// TODO: for future implementations

import { notFound } from 'next/navigation'

import { MainWrapper, PageContainer } from '@/components/Containers'
import { SectionContainer } from '@/components/Containers/SectionContainer'
import { Slider } from '@/components/Slider/Slider'
import { SectionTitle } from '@/components/Title'
import { PROJECT_NAME } from '@/constants/appConfigurations'
import { env } from '@/env.mjs'
import { server } from '@/trpc/server'

import type { PageParams } from '@/types/pageParams'
import type { Metadata } from 'next'

export const generateMetadata = async ({
	params: { type },
	searchParams: { page = '1' },
}: XMDBShowPageProps): Promise<Metadata> => {
	return {
		title: 'Discover',
		openGraph: {
			type: 'website',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/discover/${String(type)}?page${String(page)}`,
		},
	}
}

type XMDBShowPageProps = Readonly<{
	params: PageParams<['type']>
	searchParams: PageParams<['page', 'year', 'sort', 'genres']>
}>

export default async function XMDBShowPage({
	params: { type },
	searchParams: { page = '1', year = '2023', sort, genres },
}: XMDBShowPageProps) {
	const genreArray: number[] = genres?.split(',').map(Number) ?? [] // Split and convert each value to number
	const discoverTVData = await server.tmdb.discover.query({
		type: type as 'movie' | 'tv',
		options: { page: Number(page), sortBy: sort, year: Number(year), genres: genreArray },
	})

	if (!discoverTVData) {
		notFound()
	}
	return (
		<>
			<MainWrapper variant='black'>
				<PageContainer center>
					<SectionContainer variant='primary'>
						<SectionTitle title='Latest User Shows' description='Go to Latest Shows' href='/discover/tv' />
						<Slider data={discoverTVData.results} />
					</SectionContainer>
				</PageContainer>
			</MainWrapper>
		</>
	)
}

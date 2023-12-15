// TODO: for future implementations
import { notFound } from 'next/navigation'

import { MainWrapper, PageContainer } from '@/components/Containers'
import { SectionContainer } from '@/components/Containers/SectionContainer'
import { Slider } from '@/components/Slider/Slider'
import { SectionTitle } from '@/components/Title'
import { PROJECT_NAME } from '@/constants/appConfigurations'
import { env } from '@/env.mjs'
import { server } from '@/trpc/server'
import { PageParams } from '@/types/pageParams'

import type { Metadata } from 'next'

export const generateMetadata = async ({ params: { page } }: XMDBShowPageProps): Promise<Metadata> => {
	return {
		title: 'Discover',
		openGraph: {
			type: 'website',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/discover/tv/?page=${String(page)}`,
		},
	}
}

type XMDBShowPageProps = Readonly<{
	params: PageParams<['page']>
}>

// eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
export default async function XMDBShowPage({ params: { page } }: XMDBShowPageProps) {
	const discoverTVData = await server.tmdb.discover.query({
		type: 'tv',
		options: { page: 1, sortBy: '', year: 2023 },
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

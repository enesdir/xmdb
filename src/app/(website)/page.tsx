import { MainWrapper } from '@/components/Containers/MainWrapper'
import { PageContainer } from '@/components/Containers/PageContainer'
import { SectionContainer } from '@/components/Containers/SectionContainer'
import { Slider } from '@/components/Slider/Slider'
import { SectionTitle } from '@/components/Title/SectionTitle'
import { Advert } from '@/features/advert'
import { server } from '@/trpc/server'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Ratings, Reviews, and Where to Watch the Best Movies & TV Shows',
}

export default async function WebsiteRootPage() {
	const discoverTVData = await server.tmdb.discover.query({ type: 'tv', options: { page: 1 } })
	const discoverMovieData = await server.tmdb.discover.query({ type: 'movie', options: { page: 1 } })
	return (
		<MainWrapper variant='black'>
			<SectionContainer variant='primary'>
				<Advert />
			</SectionContainer>

			<PageContainer center>
				<div className='w-full space-y-5 sm:space-y-10'>
					<SectionContainer variant='primary'>
						<SectionTitle title='TMDB TV Shows' description='TMDB TV Shows' href='/discover/tv' />
						<Slider data={discoverTVData.results} />
					</SectionContainer>
					<SectionContainer variant='primary'>
						<SectionTitle title='TMDB Movies' description='TMDB Movies' href='/discover/tv' />
						<Slider data={discoverMovieData.results} />
					</SectionContainer>
					<SectionContainer variant='primary'>
						<SectionTitle title='Latest User Shows' description='Go to Latest Shows' href='/users/shows' />
					</SectionContainer>
					<SectionContainer variant='primary'>
						<SectionTitle title='All User Shows' description='Go to User Shows' href='/users/shows/all' />
					</SectionContainer>
				</div>
			</PageContainer>
		</MainWrapper>
	)
}

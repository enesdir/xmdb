import { MainWrapper } from '@/components/Containers/MainWrapper'
import { PageContainer } from '@/components/Containers/PageContainer'
import { SectionContainer } from '@/components/Containers/SectionContainer'
import { SectionTitle } from '@/components/Title/SectionTitle'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Ratings, Reviews, and Where to Watch the Best Movies & TV Shows',
}

export default function WebsiteRootPage() {
	return (
		<MainWrapper variant='black'>
			<SectionContainer variant='primary'>
				<div className='flex items-center justify-center'>
					<div className='w-60 rounded-sm bg-white p-3 md:w-80'>
						<p className='items-center text-black'>Website Ad</p>
					</div>
				</div>
			</SectionContainer>

			<PageContainer center>
				<SectionContainer variant='primary'>
					<SectionTitle title='TMDB Contents' description='TMDB Contents' href='#' />
				</SectionContainer>
				<SectionContainer variant='primary'>
					<SectionTitle title='Latest User Shows' description='Go to Latest Shows' href='/users/shows' />
				</SectionContainer>
				<SectionContainer variant='primary'>
					<SectionTitle title='All User Shows' description='Go to User Shows' href='/users/shows/all' />
				</SectionContainer>
			</PageContainer>
		</MainWrapper>
	)
}

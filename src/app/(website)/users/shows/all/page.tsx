import { SectionContainer } from '@/components/Containers'
import { Title } from '@/components/Title'
import { PROJECT_NAME } from '@/constants/appConfigurations'
import { env } from '@/env.mjs'
import { ShowList } from '@/features/shows/'
import { server } from '@/trpc/server'

import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: 'All Shows & Movies & Series',
		openGraph: {
			type: 'website',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/users/shows/all`,
		},
	}
}

export default async function AllShowPage() {
	const shows = await server.shows.getAll.query()
	return (
		<SectionContainer variant='secondary'>
			<Title className='text-3xl font-semibold'>Users All Show</Title>
			<ShowList shows={shows} />
		</SectionContainer>
	)
}

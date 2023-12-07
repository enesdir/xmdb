// TODO: for future implementations
import { SectionContainer } from '@/components/Containers/SectionContainer'
import { PROJECT_NAME } from '@/constants/appConfigurations'
import { env } from '@/env.mjs'
import { PageParams } from '@/types/pageParams'

import type { Metadata } from 'next'

export const generateMetadata = async ({ params: { name } }: CelebrityPageProps): Promise<Metadata> => {
	return {
		title: 'Celebrity',
		openGraph: {
			type: 'profile',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/name/${String(name)}`,
		},
	}
}

type CelebrityPageProps = Readonly<{
	params: PageParams<['name']>
}>

export default async function CelebrityPage({ params: { name } }: CelebrityPageProps) {
	return (
		<>
			<SectionContainer>
				<p>celebrity: {name}</p>
			</SectionContainer>
		</>
	)
}

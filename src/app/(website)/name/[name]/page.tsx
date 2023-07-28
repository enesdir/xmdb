// TODO: for future implementations
import type { Metadata } from 'next'
import { PageParams } from '@/types/pageParams'

import { SectionContainer } from '@/components/SectionContainer'
import { PROJECT_NAME } from '@/lib/constants'
import { getBaseUrl } from '@/utils/getBaseUrl'

export const generateMetadata = async ({ params: { name } }: CelebrityPageProps): Promise<Metadata> => {
	const host = getBaseUrl(true)
	return {
		title: 'Celebrity',
		openGraph: {
			type: 'profile',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${host}/name/${String(name)}`,
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

// TODO: for future implementations
import type { Metadata } from 'next'
import { PageParams } from '@/types/pageParams'

import { SectionContainer } from '@/components/SectionContainer'
import { PROJECT_NAME } from '@/lib/constants'
import { getBaseUrl } from '@/utils/getBaseUrl'

export const generateMetadata = async ({ params: { name } }: XMDBShowPageProps): Promise<Metadata> => {
	const host = getBaseUrl(true)
	return {
		title: 'Show',
		openGraph: {
			type: 'profile',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${host}/name/${String(name)}`,
		},
	}
}

type XMDBShowPageProps = Readonly<{
	params: PageParams<['name']>
}>

export default async function XMDBShowPage({ params: { name } }: XMDBShowPageProps) {
	return (
		<>
			<SectionContainer>
				<p>celebrity: {name}</p>
			</SectionContainer>
		</>
	)
}

import type { Metadata } from 'next'
import { Container } from '@/components'
import { env } from '@/env.mjs'
import { ShowCastList } from '@/features/show/'
import { PROJECT_NAME } from '@/lib/constants'
import { getShowById } from '@/lib/show'
import { PageParams } from '@/types/pageParams'
import { ShowHero } from '../../../../features/show/components/ShowHero'

export const generateMetadata = async ({ params }: ShowPageProps): Promise<Metadata> => {
	const { id: pageID, title, description } = await getShowById(Number(params.id))

	return {
		title: title,
		openGraph: {
			type: 'article',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/${String(pageID)}`,
			description: description,
		},
	}
}

type ShowPageProps = Readonly<{
	params: PageParams<'id'>
}>

export default async function ShowPage({ params }: ShowPageProps) {
	const show = await getShowById(Number(params.id))

	return (
		<>
			<ShowHero show={show} />
			<Container>
				<div className='w-full rounded-lg'>
					<ShowCastList />
				</div>
			</Container>
		</>
	)
}

import type { Metadata } from 'next'
import { env } from '@/env.mjs'
import { OtherMedia, Poster, ShowBody, ShowCastList, ShowHeader, Trailer } from '@/features/show/'
import { PROJECT_NAME } from '@/lib/constants'
import { getShowById } from '@/lib/show'
import { PageParams } from '@/types/pageParams'

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
			<div className='mx-auto flex w-full bg-zinc-50'>
				<div className='flex w-full flex-wrap space-y-2'>
					<div className='w-full rounded-lg'>
						<ShowHeader show={show} />
					</div>
					<div className='w-full rounded-lg bg-gray-200 sm:w-1/4'>
						<Poster show={show} />
					</div>
					<div className='w-full rounded-lg sm:w-1/2'>
						<Trailer show={show} />
					</div>
					<div className='w-full rounded-lg sm:w-1/4'>
						<OtherMedia show={show} />
					</div>
					<div className='w-full rounded-lg  '>
						<ShowBody show={show} />
					</div>
					<div className='w-full rounded-lg'>
						<ShowCastList />
					</div>
				</div>
			</div>
		</>
	)
}

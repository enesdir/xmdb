import type { Metadata } from 'next'
import { OtherMedia } from '@/components/main/ShowBody/OtherMedia'
import { Poster } from '@/components/main/ShowBody/Poster'
import { ShowBody } from '@/components/main/ShowBody/ShowBody'
import { Trailer } from '@/components/main/ShowBody/Trailer'
import { ShowCastList } from '@/components/main/ShowCast/ShowCastList'
import { ShowHeader } from '@/components/main/ShowHeader/ShowHeader'
import { env } from '@/env.mjs'
import { PROJECT_NAME } from '@/lib/constants'
import { getShowById } from '@/lib/show'
import { PageParams } from '@/types/pageParams'

export const generateMetadata = async ({ params: { slug } }: ShowPageProps): Promise<Metadata> => {
	const { id, title, description, author } = await getShowById(Number(slug))

	return {
		title: title,
		openGraph: {
			type: 'article',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/${id}`,
			description: description,
		},
	}
}

type ShowPageProps = Readonly<{
	params: PageParams<'slug'>
}>

export default async function ShowPage({ params }: ShowPageProps) {
	const show = await getShowById(Number(params.slug))

	return (
		<>
			<div className='mx-auto flex w-full bg-zinc-50'>
				<div className='flex w-full flex-wrap space-y-2'>
					<div className='w-full rounded-lg  '>
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

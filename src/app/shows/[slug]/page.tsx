import type { Metadata } from 'next'
import { PostHeader } from '@/components/main/PostHeader/PostHeader'
import { ShowCastList } from '@/components/main/ShowCast/ShowCastList'
import { env } from '@/env.mjs'
import { PROJECT_NAME } from '@/lib/constants'
import { getPostById } from '@/lib/post'
import { OtherMedia } from '../../../components/main/ShowBody/OtherMedia'
import { Poster } from '../../../components/main/ShowBody/Poster'
import { PostBody } from '../../../components/main/ShowBody/ShowBody'
import { Trailer } from '../../../components/main/ShowBody/Trailer'

export const generateMetadata = async ({ params: { slug } }: ShowPageProps): Promise<Metadata> => {
	const { id, title, description, author } = await getPostById({ id: Number(slug) })

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
	params: { slug: string }
}>

export default async function ShowPage({ params: { slug } }: ShowPageProps) {
	const post = await getPostById({ id: Number(slug) })

	return (
		<>
			<div className='mx-auto flex w-full bg-zinc-50'>
				<div className='flex w-full flex-wrap space-y-2'>
					<div className='w-full rounded-lg  '>
						<PostHeader post={post} />
					</div>
					<div className='w-full rounded-lg bg-gray-200 sm:w-1/4'>
						<Poster post={post} />
					</div>
					<div className='w-full rounded-lg sm:w-1/2'>
						<Trailer post={post} />
					</div>
					<div className='w-full rounded-lg sm:w-1/4'>
						<OtherMedia post={post} />
					</div>
					<div className='w-full rounded-lg  '>
						<PostBody post={post} />
					</div>
					<div className='w-full rounded-lg'>
						<ShowCastList />
					</div>
				</div>
			</div>
		</>
	)
}

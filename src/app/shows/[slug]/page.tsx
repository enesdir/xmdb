import type { Metadata } from 'next'
import { PostHeader } from '@/components/main/PostHeader/PostHeader'
import { ShowCastList } from '@/components/main/ShowCast/ShowCastList'
import { env } from '@/env.mjs'
import { PROJECT_NAME } from '@/lib/constants'
import { getPostById } from '@/lib/post'

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
			<PostHeader post={post} />
			<ShowCastList />
		</>
	)
}

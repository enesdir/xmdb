import type { Metadata } from 'next'
import { env } from '@/env.mjs'
import { PROJECT_NAME } from '@/lib/constants'
import { getAllPosts } from '@/lib/post'
import { PostList } from '../../components/main/UserPosts/PostList/PostList'

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: 'Shows & Movies & Series',
		openGraph: {
			type: 'website',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/shows`,
		},
	}
}

export default async function ShowsPage() {
	const posts = await getAllPosts()

	return (
		<>
			<PostList posts={posts} />
		</>
	)
}

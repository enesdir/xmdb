import Link from 'next/link'
import type { Post } from '~/src/server/modules/posts/postsSchemas'
import { EmptyPostsAlert } from './EmptyPostsAlert'
import { SinglePost } from './SinglePost/SinglePost'

type PostListProps = Readonly<{
	posts: Post[]
}>

export const PostList = ({ posts }: PostListProps) => {
	if (posts.length === 0) {
		return <EmptyPostsAlert />
	}

	return (
		<ol className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
			{posts.map((post) => (
				<Link key={post.id} href={`/${post.author.username}?post=${post.id}`}>
					<SinglePost post={post} />
				</Link>
			))}
		</ol>
	)
}

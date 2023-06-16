import Image from 'next/image'
import type { Post } from '@/server/modules/posts/postsSchemas'
import { PostCta } from './PostCta'
import { PostDetails } from './PostDetails'
import { PostStatistics } from './PostStatistics'

type PostHeaderProps = Readonly<{
	post: Post
}>

export const PostHeader = ({ post }: PostHeaderProps) => (
	<div className='mb-4 border-b pb-4'>
		<header className='mx-auto flex w-full flex-col items-center justify-between gap-y-4  sm:flex-row sm:items-start'>
			<div className='relative h-60 w-60 shrink-0 overflow-hidden rounded-full'>
				<Image src={post.images[0]} alt={post.title} className='object-cover' fill />
			</div>
			<section className='w-full space-y-4 sm:max-w-xs'>
				<PostCta post={post} />
				<PostStatistics post={post} />
				<PostDetails post={post} />
			</section>
		</header>
	</div>
)

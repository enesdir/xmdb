import Image from 'next/image'
import type { Post } from '@/server/modules/posts/postsSchemas'

type PosterProps = Readonly<{
	post: Post
}>

export const Poster = ({ post }: PosterProps) => {
	return (
		<div className='relative h-60 w-60 shrink-0 grow-0 overflow-hidden'>
			{/* @ts-expect-error */}
			<Image src={post.images[0]} alt={post.title} className='object-cover' fill />
		</div>
	)
}

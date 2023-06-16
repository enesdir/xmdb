import Image from 'next/image'
import type { Post } from '@/server/modules/posts/postsSchemas'
import { AccessControl } from '../AccessControl'
import { DeletePostButton } from '../DeletePostButton'
import { PostCta } from './PostCta'
import { PostDetails } from './PostDetails'
import { PostStatistics } from './PostStatistics'

type PostHeaderProps = Readonly<{
	post: Post
}>

export const PostHeader = ({ post }: PostHeaderProps) => {
	return (
		<div className='mb-4 border-b pb-4'>
			<header className='mx-auto flex w-full flex-col items-center sm:flex-row sm:items-start'>
				<div className='relative h-60 w-60 shrink-0 grow-0 overflow-hidden rounded-full'>
					<Image src={post.images[0]} alt={post.title} className='object-cover' fill />
				</div>
				<section className='grow space-y-4 '>
					<PostCta post={post} />
					<PostStatistics post={post} />
					<PostDetails post={post} />
				</section>
				<section className='grow-0 space-y-4 sm:max-w-xs'>
					<AccessControl createdID={post.author.id}>
						<DeletePostButton post={post} />
					</AccessControl>
				</section>
			</header>
		</div>
	)
}

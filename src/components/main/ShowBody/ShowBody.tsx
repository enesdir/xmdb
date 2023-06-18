import type { Post } from '@/server/modules/posts/postsSchemas'
import { AccessControl } from '../AccessControl'
import { DeletePostButton } from '../DeletePostButton'
import { PostCta } from './PostCta'
import { PostDetails } from './PostDetails'
import { PostStatistics } from './PostStatistics'

type PostBodyProps = Readonly<{
	post: Post
}>

export const PostBody = ({ post }: PostBodyProps) => {
	return (
		<div className='mb-4 border-b pb-4'>
			<div className='mx-auto flex w-full flex-col items-center sm:flex-row sm:items-start'>
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
			</div>
		</div>
	)
}

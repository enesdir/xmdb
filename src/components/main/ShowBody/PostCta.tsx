import { Post } from '@/server/modules/posts/postsSchemas'

type PostCtaProps = Readonly<{
	post: Post
}>

export const PostCta = ({ post }: PostCtaProps) => (
	<div className='flex items-center justify-between gap-x-3 sm:justify-start'>
		<h2 className='overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium'>{post.title}</h2>
		{/* <FollowButton user={user} /> */}
	</div>
)

import { Post } from '@/server/modules/posts/postsSchemas'

type PostDetailsProps = Readonly<{
	post: Post
}>

export const PostDetails = ({ post: { title, description } }: PostDetailsProps) => (
	<>
		<h3 className='font-medium'>{title}</h3>
		<div className='mt-0.5 whitespace-pre-line break-all text-justify'>{description}</div>
	</>
)

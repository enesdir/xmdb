import { ImagesSlider } from '@/components/main/ImagesSlider'
import type { Post } from '@/server/modules/posts/postsSchemas'

type UserPostDetailsProps = Readonly<{
	post: Post
}>

export const UserPostDetails = ({
	post: {
		description,
		images,
		author: { username },
	},
}: UserPostDetailsProps) => (
	<>
		<ImagesSlider images={images} />
		<div className='mt-1.5 leading-5'>
			<p className='float-left mr-1 font-medium'>{username}</p>
			<div className='whitespace-pre-line break-all'>{description}</div>
		</div>
	</>
)

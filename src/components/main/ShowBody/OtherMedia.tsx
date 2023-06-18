import type { Post } from '@/server/modules/posts/postsSchemas'

type OtherMediaProps = Readonly<{
	post: Post
}>
export const OtherMedia = ({ post }: OtherMediaProps) => {
	return (
		<div className='flex  h-full w-full flex-row lg:flex-col'>
			<div className='grow bg-teal-100 '>35 videos</div>
			<div className='grow bg-red-100'>99+photos</div>
		</div>
	)
}

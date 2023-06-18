import type { Post } from '@/server/modules/posts/postsSchemas'

type TrailerProps = Readonly<{
	post: Post
}>
export const Trailer = ({ post }: TrailerProps) => {
	return <div>Trailer</div>
}

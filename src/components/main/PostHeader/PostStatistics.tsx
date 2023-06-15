import { Post } from '@/server/modules/posts/postsSchemas'

type PostStatisticsProps = Readonly<{
	post: Post
}>
export const PostStatistics = ({ post }: PostStatisticsProps) => {
	return <div>PostStatitics</div>
}

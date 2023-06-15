import { trpc } from '@/lib/utils/trpc'

export const useGetUserPosts = () => {
	const { data: posts = [], ...rest } = trpc.posts.getAll.useQuery({})

	return { posts, ...rest }
}

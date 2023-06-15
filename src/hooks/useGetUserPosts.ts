import { trpc } from '@/lib/utils/trpc'

export const useGetUserPosts = (username: string) => {
	const { data: posts = [], ...rest } = trpc.posts.getPostsByUser.useQuery({
		username,
	})

	return { posts, ...rest }
}

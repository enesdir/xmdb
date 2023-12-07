import { client } from '@/trpc/client'

export const useGetFollowing = (userId: string) => {
	const { data: following = [], ...rest } = client.follows.getFollowing.useQuery({ userId })

	return { following, ...rest }
}

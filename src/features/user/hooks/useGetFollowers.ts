import { client } from '@/trpc/client'

export const useGetFollowers = (userId: string) => {
	const { data: followers = [], ...rest } = client.follows.getFollowers.useQuery({ userId })

	return { followers, ...rest }
}

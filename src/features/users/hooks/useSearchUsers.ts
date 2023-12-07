import { client } from '@/trpc/client'

export const useSearchUsers = (search: string) => {
	const { data: users = [], ...rest } = client.users.search.useQuery({ search }, { enabled: Boolean(search) })

	return { users, ...rest }
}

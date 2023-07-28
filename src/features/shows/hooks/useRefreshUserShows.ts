import { useRouter } from 'next/navigation'

import { trpc } from '@/lib/trpc'

export const useRefreshUserShows = () => {
	const { shows } = trpc.useContext()
	const { refresh } = useRouter()

	return async (username: string) => {
		await shows.getShowsByUser.refetch({ username })
		refresh()
	}
}

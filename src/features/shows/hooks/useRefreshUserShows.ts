import { useRouter } from 'next/navigation'

import { client } from '@/trpc/client'

export const useRefreshUserShows = () => {
	const utils = client.useUtils()
	const { refresh } = useRouter()

	return async (username: string) => {
		await utils.shows.getShowsByUser.invalidate({ username })
		refresh()
	}
}

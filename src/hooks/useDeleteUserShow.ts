import { trpc } from '@/lib/utils/trpc'
import { useRefreshUserShows } from './useRefreshUserShows'

export const useDeleteUserPost = () => {
	const { mutateAsync, isLoading } = trpc.shows.deleteById.useMutation()

	const refresh = useRefreshUserShows()

	const deleteUserPost = async (id: number) => {
		const {
			author: { username },
		} = await mutateAsync({ id })

		if (username) {
			await refresh(username)
		}
	}

	return { deleteUserPost, isLoading }
}

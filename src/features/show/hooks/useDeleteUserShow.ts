import { useRefreshUserShows } from '@/features/shows/hooks/useRefreshUserShows'
import { trpc } from '@/lib/trpc'

export const useDeleteUserShow = () => {
	const { mutateAsync, isLoading } = trpc.shows.deleteById.useMutation()

	const refresh = useRefreshUserShows()

	const deleteUserShow = async (id: number) => {
		const {
			author: { username },
		} = await mutateAsync({ id })

		if (username) {
			await refresh(username)
		}
	}

	return { deleteUserShow, isLoading }
}

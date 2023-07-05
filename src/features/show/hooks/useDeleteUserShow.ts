import { trpc } from '@/lib/utils/trpc'
import { useRefreshUserShows } from '../../../hooks/useRefreshUserShows'

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

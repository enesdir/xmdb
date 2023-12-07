import { useRefreshUserShows } from '@/features/shows/hooks/useRefreshUserShows'
import { client } from '@/trpc/client'

export const useDeleteUserShow = () => {
	const { mutateAsync, isPending } = client.shows.deleteById.useMutation()

	const refresh = useRefreshUserShows()

	const deleteUserShow = async (id: number) => {
		const {
			author: { username },
		} = await mutateAsync({ id })

		if (username) {
			await refresh(username)
		}
	}

	return { deleteUserShow, isPending }
}

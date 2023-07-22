import { trpc } from '@/lib/trpc'

export const useToggleLike = (like: boolean) => {
	const createLikeMutation = trpc.likes.create.useMutation()
	const deleteLikeMutation = trpc.likes.delete.useMutation()

	const isLoading = createLikeMutation.isLoading || deleteLikeMutation.isLoading

	const toggleLike = async (showId: number) => {
		const mutation = like ? deleteLikeMutation : createLikeMutation

		await mutation.mutateAsync({ showId })
	}

	return { toggleLike, isLoading }
}

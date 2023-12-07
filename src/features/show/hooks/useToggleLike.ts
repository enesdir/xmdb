import { useState } from 'react'

import { client } from '@/trpc/client'

export const useToggleLike = (like: boolean, id: number) => {
	const [isLike, setIsLike] = useState(like)
	const utils = client.useUtils()
	const createLikeMutation = client.likes.create.useMutation()
	const deleteLikeMutation = client.likes.delete.useMutation()

	const isLoading = createLikeMutation.isPending || deleteLikeMutation.isPending
	const isError = createLikeMutation.isError || deleteLikeMutation.isError

	const toggleLike = async (showId: number) => {
		if (isLike) {
			await deleteLikeMutation.mutateAsync({ showId })
		} else {
			await createLikeMutation.mutateAsync({ showId })
		}

		utils.shows.getById.invalidate({ id })
		setIsLike((prev) => !prev)
	}

	return { toggleLike, isLoading, isError, isLike }
}

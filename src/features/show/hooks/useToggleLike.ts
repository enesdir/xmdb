import { useState } from 'react'

import { trpc } from '@/lib/trpc'

export const useToggleLike = (like: boolean) => {
	const [isLike, setIsLike] = useState(like)
	const createLikeMutation = trpc.likes.create.useMutation()
	const deleteLikeMutation = trpc.likes.delete.useMutation()

	const isLoading = createLikeMutation.isLoading || deleteLikeMutation.isLoading

	const toggleLike = async (showId: number) => {
		if (isLike) {
			await deleteLikeMutation.mutateAsync({ showId })
		} else {
			await createLikeMutation.mutateAsync({ showId })
		}

		setIsLike((prev) => !prev)
	}

	return { toggleLike, isLoading, isLike }
}

import { useState } from 'react'

import { client } from '@/trpc/client'

export const useToggleFollow = (initialState: boolean) => {
	const [isFollowing, setIsFollowing] = useState(initialState)

	const createFollowMutation = client.follows.createFollow.useMutation()
	const deleteFollowMutation = client.follows.deleteFollow.useMutation()

	const isLoading = createFollowMutation.isPending || deleteFollowMutation.isPending

	const toggleFollow = async ({ userId }: { userId: string }) => {
		if (isFollowing) {
			await deleteFollowMutation.mutateAsync({ userId })
		} else {
			await createFollowMutation.mutateAsync({ userId })
		}

		setIsFollowing((prev) => !prev)
	}

	return { toggleFollow, isFollowing, isLoading }
}

'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/Button'
import { useToggleFollow } from '@/features/user/hooks/useToggleFollow'
import { useRequiredSession } from '@/hooks/useRequiredSession'
import type { User } from '@/server/modules/users/usersSchemas'

type FollowButtonProps = Readonly<{
	user: User
}>

export const FollowButton = ({ user: { id, follow } }: FollowButtonProps) => {
	const router = useRouter()
	const requiredSession = useRequiredSession()

	const { data } = useSession()
	const { toggleFollow, isFollowing, isLoading } = useToggleFollow(Boolean(follow))

	const handleButtonClick = async () => {
		await toggleFollow({ userId: id })
		router.refresh()
	}

	if (data?.user.id === id) {
		return null
	}

	return (
		<Button disabled={isLoading} onClick={requiredSession(handleButtonClick)}>
			{isFollowing ? 'Unfollow' : 'Follow'}
		</Button>
	)
}

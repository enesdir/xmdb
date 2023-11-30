import { Modal } from '@/components/Modal/'
import { UserFollowersList } from './UserFollowersList'

import type { ComponentProps } from 'react'

type UserFollowersModalProps = Readonly<{
	userId: string
}> &
	ComponentProps<typeof Modal>

export const UserFollowersModal = ({ userId, ...props }: UserFollowersModalProps) => (
	<Modal {...props}>
		<Modal.Title>Followers</Modal.Title>
		<UserFollowersList userId={userId} />
	</Modal>
)

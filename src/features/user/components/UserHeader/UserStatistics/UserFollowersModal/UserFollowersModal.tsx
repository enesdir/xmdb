import type { ComponentProps } from 'react'
import { Modal } from '@/components/Modal/Modal'
import { UserFollowersList } from './UserFollowersList'

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

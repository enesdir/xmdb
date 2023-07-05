import type { ComponentProps } from 'react'
import { Modal } from '@/components/'
import { UserFollowingList } from './UserFollowingList'

type UserFollowingModalProps = Readonly<{
	userId: string
}> &
	ComponentProps<typeof Modal>

export const UserFollowingModal = ({ userId, ...props }: UserFollowingModalProps) => (
	<Modal {...props}>
		<Modal.Title>Following</Modal.Title>
		<UserFollowingList userId={userId} />
	</Modal>
)

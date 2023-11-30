import { Modal } from '@/components/Modal/'
import { UserFollowingList } from './UserFollowingList'

import type { ComponentProps } from 'react'

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

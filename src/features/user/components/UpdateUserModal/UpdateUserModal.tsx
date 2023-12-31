import { Modal } from '@/components/Modal/'
import { UpdateUserAvatarForm } from './UpdateUserAvatarForm/UpdateUserAvatarForm'
import { UpdateUserForm } from './UpdateUserForm/UpdateUserForm'

import type { User } from '@/server/modules/users/usersSchemas'
import type { ComponentProps } from 'react'

type UpdateUserModalProps = Readonly<{
	user: User
}> &
	ComponentProps<typeof Modal>

export const UpdateUserModal = ({ user, ...props }: UpdateUserModalProps) => (
	<Modal {...props}>
		<Modal.Title>Update your account</Modal.Title>
		<UpdateUserAvatarForm user={user} onSuccess={props.onClose} />
		<UpdateUserForm user={user} onSuccess={props.onClose} />
	</Modal>
)

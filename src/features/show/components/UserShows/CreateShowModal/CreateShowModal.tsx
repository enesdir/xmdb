import type { ComponentProps } from 'react'

import { Modal } from '@/components/Modal/'
import { CreateShowForm } from './CreateShowForm/CreateShowForm'

export const CreateShowModal = (props: ComponentProps<typeof Modal>) => (
	<Modal {...props}>
		<Modal.Title>Create a new post</Modal.Title>
		<CreateShowForm onSuccess={props.onClose} />
	</Modal>
)

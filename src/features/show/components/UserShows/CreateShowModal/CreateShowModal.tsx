import { Modal } from '@/components/Modal/'
import { CreateShowForm } from './CreateShowForm/CreateShowForm'

import type { ComponentProps } from 'react'

export const CreateShowModal = (props: ComponentProps<typeof Modal>) => (
	<Modal {...props}>
		<Modal.Title>Create a new post</Modal.Title>
		<CreateShowForm onSuccess={props.onClose} />
	</Modal>
)

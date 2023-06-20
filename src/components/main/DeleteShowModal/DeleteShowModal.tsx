import type { ComponentProps } from 'react'
import { Modal } from '@/components/ui/Modal/Modal'

export const DeleteShowModal = (props: ComponentProps<typeof Modal>) => (
	<Modal {...props}>
		<Modal.Title>Delete Show</Modal.Title>
		{/* <CreateShowForm onSuccess={props.onClose} /> */}
	</Modal>
)

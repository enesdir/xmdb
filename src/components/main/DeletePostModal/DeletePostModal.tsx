import type { ComponentProps } from 'react'
import { Modal } from '@/components/ui/Modal/Modal'

export const DeletePostModal = (props: ComponentProps<typeof Modal>) => (
	<Modal {...props}>
		<Modal.Title>Delete Post</Modal.Title>
		{/* <CreatePostForm onSuccess={props.onClose} /> */}
	</Modal>
)

import type { ComponentProps } from 'react'
import { Modal } from '@/components/ui/Modal/Modal'
import { CreatePostForm } from './CreatePostForm/CreatePostForm'

export const CreatePostModal = (props: ComponentProps<typeof Modal>) => (
	<Modal {...props}>
		<Modal.Title>Create a new post</Modal.Title>
		<CreatePostForm onSuccess={props.onClose} />
	</Modal>
)

import type { ComponentProps, ReactNode } from 'react'
import { Button } from '@/components/'
import { Modal } from '@/components/Modal/Modal'

type ConfirmModalProps = Readonly<{
	title: string
	isLoading?: boolean
	variant: 'primary' | 'danger'
	icon?: ReactNode
	onConfirm?: () => void
}> &
	ComponentProps<typeof Modal>

export const ConfirmModal = ({ title, isLoading, onConfirm, variant, icon, ...props }: ConfirmModalProps) => (
	<Modal {...props}>
		<Modal.Title>{title}</Modal.Title>
		<footer className='flex justify-end gap-x-2'>
			<Button variant={variant} isLoading={Boolean(isLoading)} onClick={onConfirm} icon={icon}>
				Confirm
			</Button>
			<Button onClick={props.onClose}>Cancel</Button>
		</footer>
	</Modal>
)

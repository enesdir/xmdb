import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal/Modal'

import type { ModalProps } from '@/components/Modal/Modal'
import type { ReactNode } from 'react'

type ConfirmModalProps = Readonly<{
	title: string
	isLoading?: boolean
	variant: 'primary' | 'danger'
	icon?: ReactNode
	onConfirm?: () => void
}> &
	Omit<ModalProps, 'variant' | 'children'>

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

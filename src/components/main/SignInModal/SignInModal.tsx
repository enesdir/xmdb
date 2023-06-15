import type { ComponentProps } from 'react'
import { Modal } from '@/components/ui/Modal/Modal'
import { SignInForm } from './SignInForm/SignInForm'

type SignInModalProps = ComponentProps<typeof Modal>

export const SignInModal = (props: SignInModalProps) => (
	<Modal {...props}>
		<Modal.Title>Sign in to your account</Modal.Title>
		<SignInForm />
	</Modal>
)

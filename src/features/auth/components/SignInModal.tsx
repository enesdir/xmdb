import { Modal } from '@/components/Modal/Modal'
import { SignInForm } from './SignInForm/SignInForm'

import type { ComponentProps } from 'react'

type SignInModalProps = ComponentProps<typeof Modal>

export const SignInModal = (props: SignInModalProps) => (
	<Modal {...props}>
		<Modal.Title>Sign in to your account</Modal.Title>
		<SignInForm />
	</Modal>
)

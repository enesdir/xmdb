import type { ComponentProps } from 'react'

import { Alert } from '@/components/Alert'
import { Modal } from '@/components/Modal/Modal'
import { getSignInPageErrorMessage } from '@/utils/authErrors'
import { SignUpForm } from '../SignUpForm/SignUpForm'

type SignUpModalProps = Readonly<{
	error: string | null
}> &
	ComponentProps<typeof Modal>

export const SignUpModal = ({ error, ...props }: SignUpModalProps) => (
	<Modal {...props}>
		<Modal.Title>Create a new account</Modal.Title>
		{error && (
			<div className='my-4'>
				<Alert variant='error'>{getSignInPageErrorMessage(error)}</Alert>
			</div>
		)}
		<SignUpForm />
	</Modal>
)

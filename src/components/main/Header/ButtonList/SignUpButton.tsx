'use client'

import { Button } from '@/components/ui/Button/Button'
import { useModal } from '@/hooks/useModal'
import { useQueryError } from '@/hooks/useQueryError'
import { SignUpModal } from '../../SignUpModal/SignUpModal'

export const SignUpButton = () => {
	const { isError, error } = useQueryError()
	const { isOpen, openModal, closeModal } = useModal(isError)

	return (
		<>
			<Button variant='primary' onClick={openModal}>
				Sign up
			</Button>
			<SignUpModal error={error} isOpen={isOpen} onClose={closeModal} />
		</>
	)
}

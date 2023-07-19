'use client'

import { Button } from '@/components/Button'
import { SignUpModal } from '@/features/auth/'
import { useBoolean } from '@/hooks/useBoolean'
import { useQueryError } from '@/hooks/useQueryError'

export const SignUpButton = () => {
	const { isError, error } = useQueryError()
	const { value, setTrue, setFalse } = useBoolean(false || isError)
	return (
		<>
			<Button variant='text' onClick={setTrue}>
				Sign up
			</Button>
			<SignUpModal error={error} isOpen={value} onClose={setFalse} />
		</>
	)
}

'use client'

import { SignUpModal } from '@/components/main/SignUpModal/SignUpModal'
import { Button } from '@/components/ui/Button/Button'
import { useBoolean } from '@/hooks/useBoolean'
import { useQueryError } from '@/hooks/useQueryError'

export const SignUpButton = () => {
	const { isError, error } = useQueryError()
	const { value, setTrue, setFalse } = useBoolean(false || isError)
	return (
		<>
			<Button variant='primary' onClick={setTrue}>
				Sign up
			</Button>
			<SignUpModal error={error} isOpen={value} onClose={setFalse} />
		</>
	)
}

'use client'

import { Button } from '@/components/Button'
import { SignInModal } from '@/features/auth/'
import { useBoolean } from '@/hooks/useBoolean'

export const SignInButton = () => {
	const { value, setTrue, setFalse } = useBoolean(false)

	return (
		<>
			<Button variant='text' onClick={setTrue}>
				Sign in
			</Button>
			<SignInModal isOpen={value} onClose={setFalse} />
		</>
	)
}

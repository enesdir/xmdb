'use client'

import { SignInModal } from '@/components/main/SignInModal/SignInModal'
import { Button } from '@/components/ui/Button/Button'
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

import type { FormEventHandler, ReactNode } from 'react'

import { Button } from '@/components/Button'

type AuthFormProps = Readonly<{
	buttonText: string
	isLoading: boolean
	onSubmit: FormEventHandler<HTMLFormElement>
	children: ReactNode
}>

export const AuthForm = ({ buttonText, isLoading, onSubmit, children }: AuthFormProps) => (
	<>
		<form className='space-y-3.5' onSubmit={onSubmit}>
			{children}
			<Button type='submit' variant='brand' isLoading={isLoading} fill>
				{buttonText}
			</Button>
		</form>
	</>
)

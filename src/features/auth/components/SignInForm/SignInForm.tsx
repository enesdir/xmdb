'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { PasswordField } from '@/components/PasswordField'
import { TextField } from '@/components/TextField'
import { AuthForm } from '@/features/auth/components/AuthForm'
import { useSignInForm } from './useSignInForm'

export const SignInForm = () => {
	const [isLoading, setIsLoading] = useState(false)
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useSignInForm({
		onSubmit: () => setIsLoading(true),
		onSignIn: () => setIsLoading(false),
		onUnknownError: () => toast.error('An unexpected error occurred!'),
	})

	return (
		<AuthForm buttonText='Sign in' isLoading={isLoading} onSubmit={handleFormSubmit}>
			<TextField
				type='text'
				label='Username'
				placeholder='Your username'
				required={true}
				error={errors.username?.message}
				{...register('username')}
			/>
			<PasswordField
				label='Password'
				placeholder='Your password'
				required={true}
				error={errors.password?.message}
				{...register('password')}
			/>
		</AuthForm>
	)
}

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Alert } from '@/components/Alert/Alert'
import { Checkbox } from '@/components/Checkbox'
import { PasswordField } from '@/components/PasswordField'
import { TextField } from '@/components/TextField'
import { AuthForm } from '@/features/auth/components/AuthForm'
import { DEFAULT_ERROR_MESSAGE } from '@/lib/constants'
import { useSignUpForm } from './useSignUpForm'

export const SignUpForm = () => {
	const [alert, setAlert] = useState<string | null>(null)
	const {
		isLoading,
		handleFormSubmit,
		register,
		formState: { errors },
	} = useSignUpForm({
		onSuccess: () => setAlert('Your account has been successfully created!'),
		onUnknownError: () => toast.error(DEFAULT_ERROR_MESSAGE),
	})

	return (
		<AuthForm buttonText='Sign up' isLoading={isLoading} onSubmit={handleFormSubmit}>
			{alert && <Alert variant='success'>{alert}</Alert>}
			<TextField
				type='text'
				label='Username'
				placeholder='Your username'
				required={true}
				error={errors.username?.message}
				{...register('username')}
			/>
			<TextField
				type='text'
				label='Name'
				placeholder='Your name'
				required={true}
				error={errors.name?.message}
				{...register('name')}
			/>
			<TextField
				type='email'
				label='Email address'
				placeholder='Your email'
				required={true}
				error={errors.email?.message}
				{...register('email')}
			/>
			<PasswordField
				label='Password'
				placeholder='Your password'
				required={true}
				error={errors.password?.message}
				{...register('password')}
			/>
			<PasswordField
				label='Confirm password'
				placeholder='Confirm your password'
				required={true}
				error={errors.confirmPassword?.message}
				{...register('confirmPassword')}
			/>
			<Checkbox
				label='I accept the Terms and Conditions'
				error={errors.acceptRules?.message}
				{...register('acceptRules')}
			/>
		</AuthForm>
	)
}

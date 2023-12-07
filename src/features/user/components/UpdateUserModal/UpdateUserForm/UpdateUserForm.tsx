import { Button } from '@/components/Button'
import { Textarea } from '@/components/Textarea'
import { TextField } from '@/components/TextField'
import { useUpdateUserForm } from './useUpdateUserForm'

import type { User } from '@/server/modules/users/usersSchemas'

type UpdateUserFormProps = Readonly<{
	user: User
	onSuccess?: () => void
}>

export const UpdateUserForm = ({ user, onSuccess }: UpdateUserFormProps) => {
	const {
		isPending,
		handleFormSubmit,
		register,
		formState: { isDirty, errors },
	} = useUpdateUserForm(user, { onSuccess })

	return (
		<form className='mt-3 space-y-3.5' onSubmit={handleFormSubmit}>
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
			<Textarea
				label='Biography'
				placeholder='Your biography'
				spellCheck={false}
				error={errors.biography?.message}
				{...register('biography')}
			/>
			<Button type='submit' variant='primary' disabled={!isDirty} isLoading={isPending} fill>
				Update the account
			</Button>
		</form>
	)
}

import { useCreateUser } from '@/features/auth/hooks/useCreateUser'
import { useZodForm } from '@/hooks/useZodForm'
import { isObjectKey } from '@/utils/objectOperations'
import { capitalize } from '@/utils/stringOperations'
import { signUpFormSchema } from './SignUpFormSchemas'

interface Options {
	readonly onSuccess?: () => void
	readonly onUnknownError?: () => void
}

export const useSignUpForm = ({ onSuccess, onUnknownError }: Options = {}) => {
	const { handleSubmit, getValues, setError, reset, ...rest } = useZodForm(signUpFormSchema)
	const { createUser, isPending } = useCreateUser()

	const handleFormSubmit = handleSubmit(({ username, name, email, password }) => {
		createUser(
			{
				username,
				name,
				email,
				password,
			},
			{
				onSuccess: () => {
					reset()
					onSuccess?.()
				},
				onAlreadyExistsError: (target) => {
					if (target && isObjectKey(target, getValues())) {
						setError(target, {
							message: `${capitalize(target)} already exists`,
						})
					}
				},
				onUnknownError,
			}
		)
	})

	return { handleFormSubmit, isPending, ...rest }
}

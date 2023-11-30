import { useRouter } from 'next/navigation'

import { useUpdateUser } from '@/features/user/hooks/useUpdateUser'
import { useZodForm } from '@/hooks/useZodForm'
import { isObjectKey } from '@/utils/objectOperations'
import { capitalize } from '@/utils/stringOperations'
import { updateUserFormSchema } from './UpdateUserFormSchemas'

import type { User } from '@/server/modules/users/usersSchemas'

interface Options {
	readonly onSuccess?: () => void
}

export const useUpdateUserForm = (
	{ username, name, email, biography }: User,
	{ onSuccess }: Options = {}
) => {
	const router = useRouter()

	const { updateUser, isLoading } = useUpdateUser()
	const { handleSubmit, getValues, setError, ...rest } = useZodForm(updateUserFormSchema, {
		defaultValues: {
			biography,
			...(name && { name }),
			...(email && { email }),
			...(username && { username }),
		},
	})

	const handleFormSubmit = handleSubmit(({ username, name, email, biography }) => {
		updateUser(
			{ username, name, email, biography },
			{
				onSuccess: ({ username }) => {
					router.replace(`/user/${username}`)
					router.refresh()
					onSuccess?.()
				},
				onAlreadyExistsError: (target) => {
					if (target && isObjectKey(target, getValues())) {
						setError(target, {
							message: `${capitalize(target)} already exists`,
						})
					}
				},
			}
		)
	})

	return { handleFormSubmit, isLoading, ...rest }
}

import { useRouter } from 'next/navigation'

import { useCreateUserAvatar } from '@/features/user/hooks/useCreateUserAvatar'
import { useDeleteUserAvatar } from '@/features/user/hooks/useDeleteUserAvatar'
import { useUpdateUser } from '@/features/user/hooks/useUpdateUser'
import { useZodForm } from '@/hooks/useZodForm'
import { updateUserAvatarFormSchema } from './UpdateUserAvatarFormSchemas'

interface Options {
	readonly onSuccess?: () => void
}

export const useUpdateUserAvatarForm = ({ onSuccess }: Options = {}) => {
	const { handleSubmit, ...rest } = useZodForm(updateUserAvatarFormSchema)

	const { createUserAvatar, isPending: isCreateUserAvatarLoading } = useCreateUserAvatar()
	const { deleteUserAvatar, isPending: isDeleteUserAvatarLoading } = useDeleteUserAvatar()
	const { updateUser, isPending: isUpdateUserLoading } = useUpdateUser()

	const router = useRouter()

	const handleFormSubmit = handleSubmit(async ({ file }) => {
		const image = file ? await createUserAvatar(file) : await deleteUserAvatar()

		updateUser(
			{
				image: image || null,
			},
			{
				onSuccess: () => {
					router.refresh()
					onSuccess?.()
				},
			}
		)
	})

	return {
		handleFormSubmit,
		isLoading: isCreateUserAvatarLoading || isDeleteUserAvatarLoading || isUpdateUserLoading,
		...rest,
	}
}

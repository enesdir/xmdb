import { useMutation } from '@tanstack/react-query'
import { deleteAvatar } from '@/lib/services/avatarsService'

export const useDeleteUserAvatar = () => {
	const { mutateAsync, isLoading } = useMutation({ mutationFn: deleteAvatar })

	const deleteUserAvatar = async () => {
		await mutateAsync()
	}

	return { deleteUserAvatar, isLoading }
}

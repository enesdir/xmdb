import { useMutation } from '@tanstack/react-query'

import { createAvatar } from '@/features/user/services/avatarsService'

export const useCreateUserAvatar = () => {
	const { mutateAsync, isPending } = useMutation({ mutationFn: createAvatar })

	const createUserAvatar = async (image: Blob) => {
		const { url } = await mutateAsync(image)

		return url
	}

	return { createUserAvatar, isPending }
}

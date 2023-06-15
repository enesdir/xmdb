import { useMutation } from '@tanstack/react-query'
import { createPost } from '@/lib/services/posts.service'

export const useCreateUserPost = () => {
	const { mutateAsync, isLoading } = useMutation({ mutationFn: createPost })

	const createUserPost = async ({
		description,
		images,
		title,
	}: {
		description: string
		title: string
		images: Blob[]
	}) => {
		await mutateAsync({
			description,
			images,
			title,
		})
	}

	return { createUserPost, isLoading }
}

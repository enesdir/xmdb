import { useCreateUserPost } from '@/hooks/useCreateUserPost'
import { useZodForm } from '@/hooks/useZodForm'
import { createPostFormSchema } from './CreatePostFormSchema'

interface Options {
	readonly onSuccess?: () => void
	readonly onUnknownError?: () => void
}

export const useCreatePostForm = ({ onSuccess, onUnknownError }: Options) => {
	const { handleSubmit, ...rest } = useZodForm(createPostFormSchema)

	const { createUserPost, isLoading } = useCreateUserPost()

	const handleFormSubmit = handleSubmit(async ({ description, images, title }) => {
		try {
			await createUserPost({
				description,
				images,
				title,
			})
			onSuccess?.()
		} catch (err) {
			onUnknownError?.()
		}
	})

	return { handleFormSubmit, isLoading, ...rest }
}

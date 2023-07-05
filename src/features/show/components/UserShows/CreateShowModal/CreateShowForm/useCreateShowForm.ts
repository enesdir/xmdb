import { useCreateUserShow } from '@/features/show/hooks/useCreateUserShow'
import { useZodForm } from '@/hooks/useZodForm'
import { createShowFormSchema } from './CreateShowFormSchema'

interface Options {
	readonly onSuccess?: () => void
	readonly onUnknownError?: () => void
}

export const useCreateShowForm = ({ onSuccess, onUnknownError }: Options) => {
	const { handleSubmit, ...rest } = useZodForm(createShowFormSchema)

	const { createUserShow, isLoading } = useCreateUserShow()

	const handleFormSubmit = handleSubmit(
		async ({
			description,
			images,
			title,
			original_title,
			overview,
			original_language,
			media_type,
			trailer,
			adult,
			director,
		}) => {
			try {
				await createUserShow({
					description,
					images,
					title,
					original_title,
					overview,
					original_language,
					media_type,
					trailer,
					adult,
					director,
				})
				onSuccess?.()
			} catch (err) {
				onUnknownError?.()
			}
		}
	)

	return { handleFormSubmit, isLoading, ...rest }
}

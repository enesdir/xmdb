import { useCreateUserShow } from '@/features/show/hooks/useCreateUserShow'
import { useZodForm } from '@/hooks/useZodForm'
import { createShowFormSchema } from './CreateShowFormSchema'

interface Options {
	readonly onSuccess?: () => void
	readonly onUnknownError?: () => void
}

export const useCreateShowForm = ({ onSuccess, onUnknownError }: Options) => {
	const { handleSubmit, ...rest } = useZodForm(createShowFormSchema)

	const { createUserShow, isPending } = useCreateUserShow()

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
					// @ts-expect-error: todo
					original_title,
					// @ts-expect-error: todo
					overview,
					original_language,
					media_type,
					// @ts-expect-error: todo
					trailer,
					adult,
					// @ts-expect-error: todo
					director,
				})
				onSuccess?.()
			} catch (err) {
				onUnknownError?.()
			}
		}
	)

	return { handleFormSubmit, isPending, ...rest }
}

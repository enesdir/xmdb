import { useMutation } from '@tanstack/react-query'

import { createShow } from '@/features/show/services/showsService'
import { useRefreshUserShows } from '@/features/shows/hooks/useRefreshUserShows'

import type { MEDIA_TYPE, ORIGINAL_LANGUAGE } from '@prisma/client'

export const useCreateUserShow = () => {
	const { mutateAsync, isLoading } = useMutation({ mutationFn: createShow })

	const refresh = useRefreshUserShows()

	const createUserShow = async ({
		description,
		title,
		images,
		original_title,
		overview,
		original_language,
		media_type,
		trailer,
		adult,
		director,
	}: {
		title: string
		description: string
		original_title: string
		overview: string
		original_language: ORIGINAL_LANGUAGE
		media_type: MEDIA_TYPE
		trailer: string
		adult: boolean
		director: string

		images: Blob[]
	}) => {
		const {
			author: { username },
		} = await mutateAsync({
			description,
			title,
			images,
			original_title,
			overview,
			original_language,
			media_type,
			trailer,
			adult,
			director,
		})

		if (username) {
			await refresh(username)
		}
	}

	return { createUserShow, isLoading }
}

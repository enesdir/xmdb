import { MEDIA_TYPE, ORIGINAL_LANGUAGE } from '@prisma/client'
import { makeApi } from '@zodios/core'
import { z } from 'zod'

import { createApiClient } from '@/lib/createApiClient'
import { showSchema } from '@/server/modules/shows/showsSchemas'
import { getBaseUrl } from '@/utils/getBaseUrl'

const endpoints = makeApi([
	{
		method: 'post',
		path: '/api/shows',
		alias: 'createShow',
		description: 'Create Show',
		parameters: [
			{
				type: 'Body',
				name: 'body',
				description: 'New Show Data',
				schema: z.instanceof(FormData),
			},
		],
		response: showSchema,
	},
])

export function getApi() {
	return createApiClient<typeof endpoints>(getBaseUrl(true), endpoints)
}
export const createShow = ({
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
}: {
	description: string
	title: string
	original_title: string
	overview: string
	original_language: ORIGINAL_LANGUAGE
	media_type: MEDIA_TYPE
	adult: boolean
	trailer: string
	director: string
	images: Blob[]
}) => {
	const formData = new FormData()
	formData.append('title', title)
	formData.append('original_title', original_title)
	formData.append('description', description)
	formData.append('overview', overview)
	formData.append('original_language', original_language)
	formData.append('media_type', media_type)
	formData.append('trailer', trailer)
	formData.append('adult', adult.toString())
	formData.append('director', director)
	// cast.forEach((name) => {
	// 	formData.append('cast', name)
	// })

	images.forEach((image) => {
		formData.append('images', image)
	})

	return getApi().createShow(formData)
}

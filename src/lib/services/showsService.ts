import { MEDIA_TYPE, ORIGINAL_LANGUAGE } from '@prisma/client'
import { Zodios, makeApi } from '@zodios/core'
import { z } from 'zod'
import { showSchema } from '~/src/server/modules/shows/showsSchemas'

const api = makeApi([
	{
		method: 'post',
		path: '/',
		alias: 'createShow',
		parameters: [
			{
				type: 'Body',
				name: 'body',
				schema: z.instanceof(FormData),
			},
		],
		response: showSchema,
	},
])

const client = new Zodios('/api/shows', api)

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

	return client.createShow(formData)
}

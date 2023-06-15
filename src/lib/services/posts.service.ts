import { Zodios, makeApi } from '@zodios/core'
import { z } from 'zod'
import { postSchema } from '@/server/modules/posts/postsSchemas'

const api = makeApi([
	{
		method: 'post',
		path: '/',
		alias: 'createPost',
		parameters: [
			{
				type: 'Body',
				name: 'body',
				schema: z.instanceof(FormData),
			},
		],
		response: postSchema,
	},
])

const client = new Zodios('/api/posts', api)

export const createPost = ({
	description,
	images,
	title,
}: {
	description: string
	title: string

	images: Blob[]
}) => {
	const formData = new FormData()
	formData.append('title', title)

	formData.append('description', description)

	images.forEach((image) => {
		formData.append('images', image)
	})

	return client.createPost(formData)
}

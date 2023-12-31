import { makeApi } from '@zodios/core'
import { z } from 'zod'

import { env } from '@/env.mjs'
import { createSignature } from '@/lib/cloudinary/cloudinary'
import { createApiClient } from '@/lib/createApiClient'

const endpoints = makeApi([
	{
		method: 'post',
		path: '/image/upload',
		alias: 'createImage',
		description: 'Create image',
		parameters: [
			{
				type: 'Body',
				name: 'body',
				description: 'Image',
				schema: z.instanceof(FormData),
			},
		],
		response: z.object({
			secure_url: z.string(),
			eager: z
				.array(
					z.object({
						secure_url: z.string(),
					})
				)
				.optional(),
		}),
	},
	{
		method: 'post',
		path: '/image/destroy',
		alias: 'deleteImage',
		description: 'Delete image',
		parameters: [
			{
				name: 'body',
				type: 'Body',
				description: 'Image Info',
				schema: z.object({
					timestamp: z.string(),
					public_id: z.string(),
					api_key: z.string(),
					signature: z.string(),
				}),
			},
		],
		response: z.object({
			result: z.union([z.literal('ok'), z.literal('not found')]),
		}),
	},
])

export function getApi() {
	return createApiClient<typeof endpoints>(
		`https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUD_NAME}`,
		endpoints
	)
}
export const createImage = async (
	file: Blob,
	{ publicId, eager }: { publicId: string; eager?: string[] }
) => {
	const timestamp = Date.now().toString()
	const formData = new FormData()

	formData.append('file', file)
	formData.append('public_id', publicId)
	formData.append('timestamp', timestamp)
	formData.append('folder', env.CLOUDINARY_ASSETS_FOLDER)
	formData.append('api_key', env.CLOUDINARY_API_KEY)
	formData.append(
		'signature',
		await createSignature({
			publicId,
			timestamp,
			secret: env.CLOUDINARY_API_SECRET,
			folder: env.CLOUDINARY_ASSETS_FOLDER,
			eager: eager?.join(','),
		})
	)

	eager && formData.append('eager', eager.join(','))

	return getApi().createImage(formData)
}

export const deleteImage = async (id: string) => {
	const timestamp = Date.now().toString()
	const publicId = `${env.CLOUDINARY_ASSETS_FOLDER}/${id}`

	return getApi().deleteImage({
		timestamp,
		public_id: publicId,
		api_key: env.CLOUDINARY_API_KEY,
		signature: await createSignature({
			timestamp,
			publicId,
			secret: env.CLOUDINARY_API_SECRET,
		}),
	})
}

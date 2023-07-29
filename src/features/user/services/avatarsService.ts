import { makeApi } from '@zodios/core'
import { z } from 'zod'

import { env } from '@/env.mjs'
import { createApiClient } from '@/lib/createApiClient'

const endpoints = makeApi([
	{
		method: 'post',
		path: '/api/avatars',
		alias: 'createAvatar',
		description: 'Create Avatar',
		parameters: [{ type: 'Body', name: 'body', schema: z.instanceof(FormData) }],
		response: z.object({ url: z.string() }),
	},
	{
		method: 'delete',
		path: '/api/avatars',
		alias: 'deleteAvatar',
		description: 'Delete Avatar',
		response: z.string(),
	},
])

// const client = new Zodios('/api/avatars', api)
export function getApi() {
	return createApiClient<typeof endpoints>(env.NEXT_PUBLIC_BASE_URL, endpoints)
}

export const createAvatar = (image: Blob) => {
	const formData = new FormData()

	formData.append('image', image)

	return getApi().createAvatar(formData)
}

export const deleteAvatar = () => getApi().deleteAvatar(undefined)

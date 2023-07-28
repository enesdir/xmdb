import { makeApi } from '@zodios/core'
import { z } from 'zod'

import { createApiClient } from '@/lib/createApiClient'
import { getBaseUrl } from '@/utils/getBaseUrl'

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
	return createApiClient<typeof endpoints>(getBaseUrl(true), endpoints)
}

export const createAvatar = (image: Blob) => {
	const formData = new FormData()

	formData.append('image', image)

	return getApi().createAvatar(formData)
}

export const deleteAvatar = () => getApi().deleteAvatar(undefined)

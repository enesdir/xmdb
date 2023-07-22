import type { Prisma } from '@prisma/client'

export const createShowSelect = ({ userId }: { userId?: string } = {}) =>
	({
		id: true,
		description: true,
		createdAt: true,
		title: true,
		original_title: true,
		overview: true,
		original_language: true,
		media_type: true,
		adult: true,
		director: true,
		cast: true,
		image: {
			select: { id: true, url: true },
		},
		user: {
			select: {
				id: true,
				username: true,
				name: true,
				image: true,
			},
		},
		...(userId && { like: { where: { userId } } }),
		_count: { select: { like: true } },
	}) satisfies Prisma.ShowSelect

export const getFileNameFromUrl = (url: string) => url.match(/\/([^/]+)\.[\w]+$/)?.at(-1) || null

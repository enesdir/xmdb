import { MEDIA_TYPE, ORIGINAL_LANGUAGE } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { createShowSelect } from './showsUtils'

export const getAllShows = () =>
	prisma.show.findMany({
		orderBy: { createdAt: 'desc' },
		select: createShowSelect(),
	})
export const getAllLatestShows = ({ limit, cursor }: { limit: number; cursor?: number }, userId?: string) =>
	prisma.show.findMany({
		orderBy: { createdAt: 'desc' },
		select: createShowSelect({ userId }),
		take: limit,
		skip: cursor ? 1 : 0,
		...(cursor && { cursor: { id: cursor } }),
	})
export const getShowsByUsername = (username: string) =>
	prisma.show.findMany({
		where: { user: { username } },
		orderBy: { createdAt: 'desc' },
		select: createShowSelect(),
	})

export const getShowById = ({ id }: { id: number }) =>
	prisma.show.findFirst({ where: { id }, select: createShowSelect() })

export const deleteShowById = (id: number) =>
	prisma.show.delete({ where: { id }, select: createShowSelect() })

export const getShowByIdUser = (
	id: number,
	user: { id: string; username?: undefined } | { username: string; id?: undefined },
	userId?: string
) =>
	prisma.show.findFirst({
		where: { id, user },
		select: createShowSelect({ userId }),
	})

export const searchShows = (search: string, userId?: string) =>
	prisma.show.findMany({
		where: {
			OR: [
				{ title: { contains: search, mode: 'insensitive' } },
				{ original_title: { contains: search, mode: 'insensitive' } },
			],
		},
		take: 4,
		select: createShowSelect({ userId }),
	})
export const createShow = ({
	description,
	userId,
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
	title: string
	original_title: string
	overview: string
	original_language: ORIGINAL_LANGUAGE
	media_type: MEDIA_TYPE
	trailer: string
	adult: boolean
	director: string
	description: string
	userId: string
	images: string[]
}) =>
	prisma.show.create({
		data: {
			description,
			userId,
			title,
			original_title,
			overview,
			original_language,
			media_type,
			trailer,
			adult,
			director,
			image: {
				createMany: {
					data: images.map((url) => ({ url })),
				},
			},
		},
		select: createShowSelect(),
	})

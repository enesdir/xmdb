import type { Prisma } from '@prisma/client'
import { MEDIA_TYPE, ORIGINAL_LANGUAGE } from '@prisma/client'
import { prisma } from '@/lib/prisma'

export const select = {
	id: true,
	description: true,
	image: {
		select: { id: true, url: true },
	},
	title: true,
	original_title: true,
	overview: true,
	original_language: true,
	media_type: true,
	release_date: true,
	first_air_date: true,
	last_air_date: true,
	number_of_seasons: true,
	number_of_episodes: true,
	revenue: true,
	runtime: true,
	trailer: true,
	adult: true,
	director: true,
	cast: true,
	user: {
		select: {
			id: true,
			username: true,
			name: true,
		},
	},
} satisfies Prisma.PostSelect

export const getAllPosts = () =>
	prisma.post.findMany({
		orderBy: { createdAt: 'desc' },
		select,
	})

export const getPostsByUsername = (username: string) =>
	prisma.post.findMany({
		where: { user: { username } },
		orderBy: { createdAt: 'desc' },
		select,
	})

export const getPostById = ({ id }: { id: number }) => prisma.post.findFirst({ where: { id }, select })

export const getPostByIdUser = ({ id, username }: { id: number; username: string }) =>
	prisma.post.findFirst({ where: { id, user: { username } }, select })

export const createPost = ({
	description,
	userId,
	images,
	title,
	original_title,
	overview,
	original_language,
	media_type,
	release_date,
	first_air_date,
	last_air_date,
	number_of_seasons,
	number_of_episodes,
	revenue,
	runtime,
	trailer,
	adult,
	director,
	cast,
}: {
	title: string
	original_title: string
	overview: string
	original_language: ORIGINAL_LANGUAGE
	media_type: MEDIA_TYPE
	release_date: Date
	first_air_date: Date
	last_air_date: Date
	number_of_seasons: number
	number_of_episodes: number
	revenue: number
	runtime: number
	trailer: string
	adult: boolean
	director: string
	cast: string[]
	description: string
	userId: string
	images: string[]
}) =>
	prisma.post.create({
		data: {
			description,
			userId,
			title,
			original_title,
			overview,
			original_language,
			media_type,
			release_date,
			first_air_date,
			last_air_date,
			number_of_seasons,
			number_of_episodes,
			revenue,
			runtime,
			trailer,
			adult,
			director,
			cast,
			image: {
				createMany: {
					data: images.map((url) => ({ url })),
				},
			},
		},
		select,
	})

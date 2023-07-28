import type { TypeOf } from 'zod'

import { MEDIA_TYPE, ORIGINAL_LANGUAGE } from '@prisma/client'
import { z } from 'zod'

import { SHOW_DESCRIPTION_MAX_LENGTH } from '@/lib/constants'

export const showSchema = z.object({
	id: z.number(),
	description: z.string(),
	createdAt: z.string(),
	images: z.array(z.string()),
	like: z.boolean(),
	statistics: z.object({
		likes: z.number(),
	}),
	author: z.object({
		id: z.string(),
		username: z.string().nullable(),
		name: z.string().nullable(),
		image: z.string().nullable(),
	}),
	title: z.string(),
	original_title: z.string().nullish(),
	overview: z.string().nullish(),
	original_language: z.nativeEnum(ORIGINAL_LANGUAGE),
	media_type: z.nativeEnum(MEDIA_TYPE),
	trailer: z.string().url().nullish(),
	adult: z.boolean().default(false),
	director: z.string().nullish(),
	cast: z.array(z.string()).nullable(),
})
export const createShowSchema = z.object({
	description: z.string().nonempty().max(SHOW_DESCRIPTION_MAX_LENGTH).trim(),
	images: z.array(z.custom<File>((value) => value instanceof Blob)),
	title: z.string().nonempty(),
	original_title: z.string().optional().nullable(),
	overview: z.string().optional().nullable(),
	original_language: z.nativeEnum(ORIGINAL_LANGUAGE),
	media_type: z.nativeEnum(MEDIA_TYPE),
	trailer: z.string().url().or(z.null()),
	adult: z.boolean().default(false),
	director: z.string().or(z.null()),
})
export const allShowsSchema = z.array(showSchema)
export const getAllLatestShowsSchema = z.object({
	limit: z.number().min(1).max(100).optional().default(3),
	cursor: z.number().optional(),
})
export const getAllShowsSchema = z.object({})
export const latestShowsSchema = z.object({
	items: z.array(showSchema),
	nextCursor: z.number().nullable(),
})
export const getShowsByUserSchema = z.object({
	username: z.string(),
})
export const getShowByIdSchema = z.object({
	id: z.number(),
})
export const getShowByIdUserSchema = z.object({
	id: z.number(),
	username: z.string(),
})
export const deleteShowByIdSchema = z.object({
	id: z.number(),
})
export const searchShowsSchema = z.object({
	search: z.string(),
})

export type Show = TypeOf<typeof showSchema>
export type GetAllShowsInput = TypeOf<typeof getAllShowsSchema>
export type GetAllLatestShowsInput = TypeOf<typeof getAllLatestShowsSchema>
export type GetShowsByUserInput = TypeOf<typeof getShowsByUserSchema>
export type GetShowByIdUserInput = TypeOf<typeof getShowByIdUserSchema>
export type GetShowByIdInput = TypeOf<typeof getShowByIdSchema>
export type DeleteShowByIdInput = TypeOf<typeof deleteShowByIdSchema>
export type SearchShowsInput = TypeOf<typeof searchShowsSchema>

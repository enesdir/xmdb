import { MEDIA_TYPE, ORIGINAL_LANGUAGE } from '@prisma/client'
import type { TypeOf } from 'zod'
import { z } from 'zod'

export const postSchema = z.object({
	id: z.number(),
	description: z.string(),
	images: z.array(z.string()),
	author: z.object({
		id: z.string(),
		username: z.string().nullable(),
		name: z.string().nullable(),
	}),
	title: z.string(),
	original_title: z.string().optional().nullable(),
	overview: z.string().optional().nullable(),
	original_language: z.nativeEnum(ORIGINAL_LANGUAGE),
	media_type: z.nativeEnum(MEDIA_TYPE),
	release_date: z.date().optional().nullable(),
	first_air_date: z.date().optional().nullable(),
	last_air_date: z.date().optional().nullable(),
	number_of_seasons: z.number().optional().nullable(),
	number_of_episodes: z.number().optional().nullable(),
	revenue: z.number().optional().nullable(),
	runtime: z.number().optional().nullable(),
	trailer: z.string().optional().nullable(),
	adult: z.boolean().default(false),
	director: z.string().optional().nullable(),
	cast: z.array(z.string()).nullable(),
})

export const getAllPostsSchema = z.object({})
export const getPostsByUserSchema = z.object({
	username: z.string(),
})
export const getPostByIdSchema = z.object({
	id: z.number(),
})
export const getPostByIdUserSchema = z.object({
	id: z.number(),
	username: z.string(),
})

export type Post = TypeOf<typeof postSchema>
export type GetAllPostsInput = TypeOf<typeof getAllPostsSchema>
export type GetPostsByUserInput = TypeOf<typeof getPostsByUserSchema>
export type GetPostByIdUserInput = TypeOf<typeof getPostByIdUserSchema>
export type GetPostByIdInput = TypeOf<typeof getPostByIdSchema>

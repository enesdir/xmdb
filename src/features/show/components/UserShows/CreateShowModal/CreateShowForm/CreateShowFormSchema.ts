import { MEDIA_TYPE, ORIGINAL_LANGUAGE } from '@prisma/client'
import { z } from 'zod'
import { SHOW_DESCRIPTION_MAX_LENGTH } from '@/lib/constants'

export const createShowFormSchema = z.object({
	title: z.string().nonempty('Please enter a show title'),
	description: z
		.string()
		.nonempty('Please enter a show description')
		.max(SHOW_DESCRIPTION_MAX_LENGTH, 'Show can be up to 300 characters long')
		.trim(),
	images: z
		.custom<FileList>((value) => value instanceof FileList)
		.refine((files) => files.length > 0)
		.transform((files) => Array.from(files)),
	original_title: z.string().or(z.null()).optional(),
	overview: z.string().or(z.null()).optional(),
	original_language: z.nativeEnum(ORIGINAL_LANGUAGE).default(ORIGINAL_LANGUAGE.ENGLISH),
	media_type: z.nativeEnum(MEDIA_TYPE).default(MEDIA_TYPE.MOVIE),

	trailer: z.string().url().or(z.null()).optional(),
	adult: z.boolean().default(false),
	director: z.string().or(z.null()).optional(),
})

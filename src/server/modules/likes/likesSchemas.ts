import type { TypeOf } from 'zod'

import { z } from 'zod'

export const createLikeSchema = z.object({
	showId: z.number(),
})

export const deleteLikeSchema = z.object({
	showId: z.number(),
})

export type CreateLikeInput = TypeOf<typeof createLikeSchema>
export type DeleteLikeInput = TypeOf<typeof deleteLikeSchema>

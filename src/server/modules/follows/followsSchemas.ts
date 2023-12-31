import { z } from 'zod'

import { userSchema } from '../users/usersSchemas'

import type { TypeOf } from 'zod'

export const followsSchema = z.array(userSchema)

export const getFollowsSchema = z.object({
	userId: z.string(),
})

export const createFollowSchema = z.object({
	userId: z.string(),
})

export const deleteFollowSchema = z.object({
	userId: z.string(),
})

export type GetFollowsInput = TypeOf<typeof getFollowsSchema>
export type CreateFollowInput = TypeOf<typeof createFollowSchema>
export type DeleteFollowInput = TypeOf<typeof createFollowSchema>

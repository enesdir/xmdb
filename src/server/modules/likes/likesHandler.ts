import { createLike, deleteLike } from './likesService'

import type { ProtectedContext } from '@/server/trpc'
import type { CreateLikeInput, DeleteLikeInput } from './likesSchemas'

export const createLikeHandler = async ({ session }: ProtectedContext, { showId }: CreateLikeInput) => {
	await createLike({ showId, userId: session.user.id })
}

export const deleteLikeHandler = async ({ session }: ProtectedContext, { showId }: DeleteLikeInput) => {
	await deleteLike({ showId, userId: session.user.id })
}

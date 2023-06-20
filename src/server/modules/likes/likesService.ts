import { prisma } from '@/lib/prisma'

export const createLike = ({ showId, userId }: { showId: number; userId: string }) =>
	prisma.like.create({ data: { showId, userId } })

export const deleteLike = ({ showId, userId }: { showId: number; userId: string }) =>
	prisma.like.delete({ where: { showId_userId: { showId, userId } } })

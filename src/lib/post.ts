import { notFound } from 'next/navigation'
import { TRPCError } from '@trpc/server'
import { appRouter } from '@/server/router'

export const parsePostQuery = (query: string | string[] | undefined) => {
	if (!query) {
		return null
	}

	return Number(Array.isArray(query) ? query[0] : query)
}
export const getPostByIdUser = async ({ id, username }: { id: number; username: string }) => {
	const caller = appRouter.createCaller({ session: null })

	try {
		return await caller.posts.getByIdUser({ id, username })
	} catch (err) {
		if (err instanceof TRPCError && err.code === 'NOT_FOUND') {
			throw notFound()
		}

		throw err
	}
}
export const getAllPosts = async () => {
	const caller = appRouter.createCaller({ session: null })

	try {
		return await caller.posts.getAll({})
	} catch (err) {
		if (err instanceof TRPCError && err.code === 'NOT_FOUND') {
			throw notFound()
		}

		throw err
	}
}
export const getPostById = async ({ id }: { id: number }) => {
	const caller = appRouter.createCaller({ session: null })

	try {
		return await caller.posts.getById({ id })
	} catch (err) {
		if (err instanceof TRPCError && err.code === 'NOT_FOUND') {
			throw notFound()
		}

		throw err
	}
}

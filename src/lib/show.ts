import { notFound } from 'next/navigation'
import { TRPCError } from '@trpc/server'

import { createTRPCContext } from '@/server/createTRPCContext'
import { appRouter } from '@/server/router'

export const parseShowQuery = (query: string | string[] | undefined) => {
	if (!query) {
		return null
	}

	return Number(Array.isArray(query) ? query[0] : query)
}
export const getShowByIdUser = async ({ id, username }: { id: number; username: string }) => {
	const caller = appRouter.createCaller(await createTRPCContext())

	try {
		return await caller.shows.getByIdUser({ id, username })
	} catch (err) {
		if (err instanceof TRPCError && err.code === 'NOT_FOUND') {
			throw notFound()
		}

		throw err
	}
}
export const getAllShows = async () => {
	const caller = appRouter.createCaller(await createTRPCContext())

	try {
		return await caller.shows.getAll({})
	} catch (err) {
		if (err instanceof TRPCError && err.code === 'NOT_FOUND') {
			throw notFound()
		}

		throw err
	}
}
export const getShowById = async (id: number) => {
	const caller = appRouter.createCaller(await createTRPCContext())

	try {
		return await caller.shows.getById({ id })
	} catch (err) {
		if (err instanceof TRPCError && err.code === 'NOT_FOUND') {
			throw notFound()
		}

		throw err
	}
}

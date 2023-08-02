import { notFound } from 'next/navigation'
import { TRPCError } from '@trpc/server'

import { createTRPCContext } from '@/server/createTRPCContext'
import { GetDiscoverSchema } from '@/server/modules/tmdb/tmdbSchemas'
import { appRouter } from '@/server/router'

export const getMovieById = async (tmdbId: number) => {
	const caller = appRouter.createCaller(await createTRPCContext())

	try {
		return await caller.tmdb.getMovieById({ tmdbId })
	} catch (err) {
		if (err instanceof TRPCError && err.code === 'NOT_FOUND') {
			throw notFound()
		}

		throw err
	}
}
export const getShowById = async (tmdbId: number) => {
	const caller = appRouter.createCaller(await createTRPCContext())

	try {
		return await caller.tmdb.getShowById({ tmdbId })
	} catch (err) {
		if (err instanceof TRPCError && err.code === 'NOT_FOUND') {
			throw notFound()
		}

		throw err
	}
}

export const getDiscover = async ({ type, options }: GetDiscoverSchema) => {
	const caller = appRouter.createCaller(await createTRPCContext())

	try {
		return await caller.tmdb.discover({ type, options })
	} catch (err) {
		if (err instanceof TRPCError && err.code === 'NOT_FOUND') {
			throw notFound()
		}

		throw err
	}
}

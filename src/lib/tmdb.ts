import { notFound } from 'next/navigation'
import { TRPCError } from '@trpc/server'

import { createTRPCContext } from '@/server/createTRPCContext'
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

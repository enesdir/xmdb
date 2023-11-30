/**
 * This is your entry point to setup the root configuration for tRPC on the server.
 *
 * - `initTRPC` should only be used once per app.
 * - We export only the functionality that we use so we can enforce which base procedures should be used
 *
 * Learn how to create protected base procedures and other things below:
 *
 * @see https://trpc.io/docs/v10/router
 * @see https://trpc.io/docs/v10/procedures
 */
import { headers } from 'next/headers'
import { experimental_createServerActionHandler } from '@trpc/next/app-dir/server'
import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'
import { ZodError } from 'zod'

import { isPrismaError } from '@/utils/prismaErrors'
import { auth } from './auth'

import type { TRPCContext } from './createTRPCContext'

const t = initTRPC.context<TRPCContext>().create({
	/** @see https://trpc.io/docs/v10/data-transformers */
	transformer: superjson,
	/** @see https://trpc.io/docs/v10/error-formatting */
	errorFormatter(opts) {
		const { shape, error } = opts
		return {
			...shape,
			data: {
				...shape.data,
				...(isPrismaError(error.cause) && {
					target: error.cause.meta?.target[0],
				}),
				zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
			},
		}
	},
})

/**
 * This is how you create new routers and sub-routers in your tRPC API.
 *
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not guarantee
 * that a user querying is authorized, but you can still access user session data if they are logged in.
 *
 * @see https://trpc.io/docs/v10/procedures
 */
export const publicProcedure = t.procedure

/** Reusable middleware that enforces users are logged in before running the procedure. */
const isAuthed = t.middleware(({ ctx: { session }, next }) => {
	if (!session) {
		throw new TRPCError({ code: 'UNAUTHORIZED' })
	}

	return next({ ctx: { session } })
})

/**
 * Protected (authenticated) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use this. It verifies the session
 * is valid and guarantees `ctx.session.user` is not null.
 *
 * @see https://trpc.io/docs/procedures
 */
export const protectedProcedure = t.procedure.use(isAuthed)

export const createTRPCAction = experimental_createServerActionHandler(t, {
	async createContext() {
		const session = await auth()

		return {
			session,
			headers: {
				// Pass the cookie header to the API
				cookies: headers().get('cookie') ?? '',
			},
		}
	},
})

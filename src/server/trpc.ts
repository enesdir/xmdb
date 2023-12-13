'server only'

import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'
import { ZodError } from 'zod'

import { auth } from '@/server/auth'
import { prisma } from '@/server/prisma'
import { isPrismaError } from '@/server/utils/prismaErrors'

import type { Session } from '@/server/auth'

interface CreateContextOptions {
	session: Session | null
}

const createInnerTRPCContext = (opts: CreateContextOptions) => {
	return {
		session: opts.session,
		prisma,
	}
}
// eslint-disable-next-line unused-imports/no-unused-vars
export const createTRPCContext = async (opts: { req?: Request; auth: Session | null }) => {
	const session = opts.auth ?? (await auth())
	const source = opts.req?.headers.get('x-trpc-source') ?? 'unknown'

	console.log('>>> tRPC Request from', source, 'by', session?.user)

	return createInnerTRPCContext({
		session,
	})
}
const t = initTRPC.context<typeof createTRPCContext>().create({
	transformer: superjson,
	errorFormatter({ shape, error }) {
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
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * /src/server/api/routers folder
 */

/**
 * This is how you create new routers and subrouters in your tRPC API
 *
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router

/**
 * Public (unauthed) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not guarantee
 * that a user querying is authorized, but you can still access user session data if they are logged in
 */
export const publicProcedure = t.procedure

/** Reusable middleware that enforces users are logged in before running the procedure */
const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
	if (!ctx.session?.user) {
		throw new TRPCError({ code: 'UNAUTHORIZED' })
	}
	return next({
		ctx: {
			// infers the `session` as non-nullable
			session: { ...ctx.session, user: ctx.session.user },
		},
	})
})

/**
 * Protected (authed) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use this. It verifies the session
 * is valid and guarantees ctx.session.user is not null
 *
 * @see https://trpc.io/docs/procedures
 */
export const protectedProcedure = t.procedure.use(enforceUserIsAuthed)

export type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>
export type ProtectedContext = Omit<TRPCContext, 'session'> & {
	session: NonNullable<TRPCContext['session']>
}

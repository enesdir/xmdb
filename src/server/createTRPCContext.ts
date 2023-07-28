import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'

import { auth } from './auth'

/**
 * This is the actual context you will use in your router. It will be used to process every request that goes
 * through your tRPC endpoint.
 *
 * @see https://trpc.io/docs/context
 */
// eslint-disable-next-line unused-imports/no-unused-vars
export const createTRPCContext = async (opts?: FetchCreateContextFnOptions) => {
	const session = await auth()

	return {
		session,
		headers: opts && Object.fromEntries(opts.req.headers),
	}
}

export type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>
export type ProtectedContext = Omit<TRPCContext, 'session'> & {
	session: NonNullable<TRPCContext['session']>
}

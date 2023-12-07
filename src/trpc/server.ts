'use server'

import { headers } from 'next/headers'
import { loggerLink, TRPCClientError, unstable_httpBatchStreamLink } from '@trpc/client'
import { experimental_createTRPCNextAppDirServer } from '@trpc/next/app-dir/server'
import superjson from 'superjson'

import { env } from '@/env.mjs'
import { appRouter } from '@/server/router'
import { getTRPCUrl } from './shared'

import type { AppRouter } from '@/server/router'

/** This client invokes procedures directly on the server without fetching over HTTP. */
export const server = experimental_createTRPCNextAppDirServer<typeof appRouter>({
	config() {
		return {
			transformer: superjson,
			links: [
				loggerLink({
					enabled: (opts) =>
						env.VERCEL_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
				}),
				unstable_httpBatchStreamLink({
					url: getTRPCUrl(),
					headers() {
						const heads = new Map(headers().entries())
						heads.set('x-trpc-source', 'rsc')
						return Object.fromEntries(heads)
					},
				}),
			],
		}
	},
})
export const isTRPCClientError = (cause: unknown): cause is TRPCClientError<AppRouter> =>
	cause instanceof TRPCClientError

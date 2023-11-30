import { createTRPCReact, TRPCClientError } from '@trpc/react-query'

import { env } from '@/env.mjs'

import type { AppRouter } from '@/server/router'

export function getTRPCUrl(): string {
	return `${env.NEXT_PUBLIC_BASE_URL}/api/trpc`
}

export const isTRPCClientError = (cause: unknown): cause is TRPCClientError<AppRouter> =>
	cause instanceof TRPCClientError

export const trpc = createTRPCReact<AppRouter>()

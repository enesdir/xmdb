import { createTRPCReact, TRPCClientError } from '@trpc/react-query'

import type { AppRouter } from '@/server/router'

export const isTRPCClientError = (cause: unknown): cause is TRPCClientError<AppRouter> =>
	cause instanceof TRPCClientError

export const client = createTRPCReact<AppRouter>()

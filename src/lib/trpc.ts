import { createTRPCReact, TRPCClientError } from '@trpc/react-query'
import type { AppRouter } from '@/server/router'
import { getBaseUrl } from '@/utils/getBaseUrl'

export function getTRPCUrl(): string {
	return `${getBaseUrl()}/api/trpc`
}

export const isTRPCClientError = (cause: unknown): cause is TRPCClientError<AppRouter> =>
	cause instanceof TRPCClientError

export const trpc = createTRPCReact<AppRouter>()

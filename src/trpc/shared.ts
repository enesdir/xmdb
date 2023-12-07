import { env } from '@/env.mjs'

import type { AppRouter } from '@/server/router'
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

export function getTRPCUrl(): string {
	return `${env.NEXT_PUBLIC_BASE_URL}/api/trpc`
}
/**
 * Inference helpers for input types
 *
 * @example Type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>

/**
 * Inference helpers for output types
 *
 * @example Type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>

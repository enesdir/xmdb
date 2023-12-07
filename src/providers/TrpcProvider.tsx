'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { loggerLink, unstable_httpBatchStreamLink } from '@trpc/client'
import superjson from 'superjson'

import { client } from '@/trpc/client'
import { getTRPCUrl } from '@/trpc/shared'

import type { PropsWithChildren } from 'react'

type TrpcProviderProps = Readonly<
	{
		headers: Headers
	} & PropsWithChildren
>
export const TrpcProvider = ({ children, headers }: TrpcProviderProps) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 5 * 1000,
					},
				},
			})
	)
	const [trpcClient] = useState(() =>
		client.createClient({
			transformer: superjson,
			links: [
				loggerLink({
					enabled: (opts) =>
						process.env.VERCEL_ENV === 'development' ||
						(opts.direction === 'down' && opts.result instanceof Error),
				}),
				unstable_httpBatchStreamLink({
					url: getTRPCUrl(),
					headers() {
						const heads = new Map(headers)
						heads.set('x-trpc-source', 'nextjs-react')
						return Object.fromEntries(heads)
					},
				}),
			],
		})
	)
	return (
		<client.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<ReactQueryStreamedHydration transformer={superjson}>{children}</ReactQueryStreamedHydration>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</client.Provider>
	)
}

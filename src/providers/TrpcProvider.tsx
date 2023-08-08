import type { PropsWithChildren } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink, loggerLink } from '@trpc/client'
import superjson from 'superjson'

import { getTRPCUrl, trpc } from '@/lib/trpc'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			refetchOnReconnect: true,
			retry: false,
			staleTime: 30 * 60 * 1000,
		},
	},
})

const trpcClient = trpc.createClient({
	/**
	 * Transformer used for data de-serialization from the server
	 *
	 * @see https://trpc.io/docs/data-transformers
	 */
	transformer: superjson,
	/**
	 * Links used to determine request flow from client to server
	 *
	 * @see https://trpc.io/docs/links
	 */
	links: [
		loggerLink({
			enabled: (opts) =>
				process.env.VERCEL_ENV === 'development' ||
				(opts.direction === 'down' && opts.result instanceof Error),
		}),
		httpBatchLink({
			url: getTRPCUrl(),
			headers() {
				return {
					'x-trpc-source': 'client',
				}
			},
		}),
	],
})

export const TrpcProvider = ({ children }: Readonly<PropsWithChildren>) => (
	<trpc.Provider client={trpcClient} queryClient={queryClient}>
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	</trpc.Provider>
)

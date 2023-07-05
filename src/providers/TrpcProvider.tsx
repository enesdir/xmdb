import type { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink, loggerLink } from '@trpc/client'
import superjson from 'superjson'
import { getTRPCUrl, trpc } from '@/lib/utils/trpc'

const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

const trpcClient = trpc.createClient({
	transformer: superjson,
	links: [
		loggerLink({
			enabled: (opts) =>
				process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
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

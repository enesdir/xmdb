import type { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import superjson from 'superjson'
import { getBaseUrl, trpc } from '@/lib/utils/trpc'

const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

const trpcClient = trpc.createClient({
	links: [
		httpBatchLink({
			url: `${getBaseUrl()}/api/trpc`,
		}),
	],
	transformer: superjson,
})

export const TrpcProvider = ({ children }: Readonly<PropsWithChildren>) => (
	<trpc.Provider client={trpcClient} queryClient={queryClient}>
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	</trpc.Provider>
)

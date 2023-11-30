/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import { Decorator } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { createTRPCReact } from '@trpc/react-query'
import superjson from 'superjson'

import type { AppRouter } from '@/server/router'

const trpc = createTRPCReact<AppRouter>()
export const withTRPCProvider: Decorator = (StoryFn) => {
	const [queryClient] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					staleTime: Infinity,
					retry: false,
					refetchOnWindowFocus: false,
				},
			},
		})
	)
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [httpBatchLink({ url: '' })],
			transformer: superjson,
		})
	)
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<StoryFn />
			</QueryClientProvider>
		</trpc.Provider>
	)
}

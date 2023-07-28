import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { env } from '@/env.mjs'
import { createTRPCContext } from '@/server/createTRPCContext'
import { appRouter } from '@/server/router'

// Add back once NextAuth v5 is released
// export const runtime = 'edge';

const handler = (request: Request) =>
	fetchRequestHandler({
		endpoint: '/api/trpc',
		req: request,
		router: appRouter,
		createContext: createTRPCContext,
		onError:
			env.VERCEL_ENV === 'development'
				? ({ path, error }) => {
						console.error(`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`)
				  }
				: undefined,
	})

export { handler as GET, handler as POST }

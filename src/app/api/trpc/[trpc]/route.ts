import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { createTRPCContext } from '@/server/createTRPCContext'
import { appRouter } from '@/server/router'

const handler = (request: Request) =>
	fetchRequestHandler({
		endpoint: '/api/trpc',
		req: request,
		router: appRouter,
		createContext: createTRPCContext,
	})

export { handler as GET, handler as POST }

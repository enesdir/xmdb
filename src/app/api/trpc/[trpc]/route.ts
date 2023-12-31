// @ts-except-error: solve Types of property '__return_type__' are incompatible.
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { auth } from '@/server/auth'
import { appRouter } from '@/server/router'
import { createTRPCContext } from '@/server/trpc'

export const runtime = 'nodejs'

/** Configure basic CORS headers You should extend this to match your needs */
function setCorsHeaders(res: Response) {
	res.headers.set('Access-Control-Allow-Origin', '*')
	res.headers.set('Access-Control-Request-Method', '*')
	res.headers.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST')
	res.headers.set(
		'Access-Control-Allow-Headers',
		'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
	)
}

export function OPTIONS() {
	const response = new Response(null, {
		status: 204,
	})
	setCorsHeaders(response)
	return response
}

const handler = auth(async (req) => {
	const response = await fetchRequestHandler({
		endpoint: '/api/trpc',
		router: appRouter,
		req,
		createContext: () => createTRPCContext({ auth: req.auth, req }),
		onError({ error, path }) {
			console.error(`>>> tRPC Error on '${path}'`, error)
		},
	})

	setCorsHeaders(response)
	return response
})

export { handler as GET, handler as POST }

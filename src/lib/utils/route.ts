import { auth } from '@/server/auth'

export const createJsonResponse = (body: Record<string, unknown> | undefined, status: number) =>
	new Response(JSON.stringify(body), {
		status,
		headers: {
			'Content-Type': 'application/json',
		},
	})

export const protectRoute = async () => {
	const session = await auth()

	if (session) {
		return [null, session] as const
	}

	return [createJsonResponse({ message: 'Unauthorized!' }, 401), null] as const
}

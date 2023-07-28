import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/server/authOptions'

// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
	const session = await getServerSession(authOptions)

	if (!session) {
		return new NextResponse(JSON.stringify({ status: 'fail', message: 'You are not logged in' }), {
			status: 401,
		})
	}

	return NextResponse.json({
		authenticated: !!session,
		session,
	})
}

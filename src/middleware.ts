import { NextResponse } from 'next/server'

/**
 * Global middlewares
 *
 * @returns {void}
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware
 */

export function middleware() {
	NextResponse.next()
}

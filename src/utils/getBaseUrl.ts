import { env } from '@/env.mjs'

export const getBaseUrl: (isZodios?: boolean) => string = (isZodios) => {
	if (isZodios === false || isZodios === undefined) {
		// Return other options when isZodios is false or undefined
		if (typeof window !== 'undefined') {
			return ''
		}

		if (env.NEXT_PUBLIC_VERCEL_URL) {
			return `https://${env.NEXT_PUBLIC_VERCEL_URL}`
		}

		if (env.NEXT_PUBLIC_RENDER_INTERNAL_HOSTNAME) {
			return `http://${env.NEXT_PUBLIC_RENDER_INTERNAL_HOSTNAME}:${env.NEXT_PUBLIC_PORT}`
		}
	}

	// Default return when isZodios is true
	return `https://${env.NEXT_PUBLIC_VERCEL_URL}`
}

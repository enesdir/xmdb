export const getBaseUrl: (isZodios?: boolean) => string = (isZodios) => {
	if (isZodios === false || isZodios === undefined) {
		// Return other options when isZodios is false or undefined
		if (typeof window !== 'undefined') {
			return ''
		}

		if (process.env.VERCEL_URL) {
			return `https://${process.env.VERCEL_URL}`
		}

		if (process.env.RENDER_INTERNAL_HOSTNAME) {
			return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`
		}
	}

	// Default return when isZodios is true
	return `http://localhost:${process.env.PORT ?? 3000}`
}

import { z } from 'zod'

const common = {
	NEXT_PUBLIC_BASE_URL: z.string().url().nonempty(),
}

/**
 * Specify your server-side environment variables schema here. This way you can ensure the app isn't built
 * with invalid env vars.
 */
const server = z.object({
	...common,
	POSTGRES_PRISMA_URL: z.string().min(1),
	POSTGRES_URL_NON_POOLING: z.string().min(1),
	VERCEL_ENV: z.enum(['development', 'test', 'production']),
	NEXTAUTH_URL: z.string().url().nonempty(),
	NEXTAUTH_SECRET: z.string().min(10).nonempty(),
	CLOUDINARY_API_KEY: z.string().nonempty(),
	CLOUDINARY_API_SECRET: z.string().nonempty(),
	CLOUDINARY_CLOUD_NAME: z.string().nonempty(),
	CLOUDINARY_ASSETS_FOLDER: z.string().nonempty(),
	TMDB_READ_ACCESS_TOKEN: z.string().min(1),
	TMDB_API_KEY: z.string().min(1),
})

/**
 * Specify your client-side environment variables schema here. This way you can ensure the app isn't built
 * with invalid env vars. To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
const client = z.object({
	...common,
})

/**
 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g. middlewares) or
 * client-side so we need to destruct manually.
 *
 * @type {Record<keyof z.infer<typeof server> | keyof z.infer<typeof client>, string | undefined>}
 */
const processEnv = {
	POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
	POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
	VERCEL_ENV: process.env.VERCEL_ENV,
	NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
	NEXTAUTH_URL: process.env.NEXTAUTH_URL,
	NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
	CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
	CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_ASSETS_FOLDER: process.env.CLOUDINARY_ASSETS_FOLDER,
	TMDB_READ_ACCESS_TOKEN: process.env.TMDB_READ_ACCESS_TOKEN,
	TMDB_API_KEY: process.env.TMDB_API_KEY,
}

// Don't touch the part below
// --------------------------

const merged = server.merge(client)

/** @typedef {z.input<typeof merged>} MergedInput */
/** @typedef {z.infer<typeof merged>} MergedOutput */
/** @typedef {z.SafeParseReturnType<MergedInput, MergedOutput>} MergedSafeParseReturn */

let env = /** @type {MergedOutput} */ (/** @type {any} */ (process.env))

if (!!process.env.SKIP_ENV_VALIDATION == false) {
	const isServer = typeof window === 'undefined'

	const parsed = /** @type {MergedSafeParseReturn} */ (
		isServer
			? merged.safeParse(processEnv) // on server we can validate all env vars
			: client.safeParse(processEnv) // on client we can only validate the ones that are exposed
	)

	if (parsed.success === false) {
		console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors)
		throw new Error('Invalid environment variables')
	}

	env = new Proxy(parsed.data, {
		get(target, prop) {
			if (typeof prop !== 'string') return undefined
			// Throw a descriptive error if a server-side env var is accessed on the client
			// Otherwise it would just be returning `undefined` and be annoying to debug
			if (!isServer && !prop.startsWith('NEXT_PUBLIC_'))
				throw new Error(
					process.env.VERCEL_ENV === 'production'
						? '❌ Attempted to access a server-side environment variable on the client'
						: `❌ Attempted to access server-side environment variable '${prop}' on the client`
				)
			return target[/** @type {keyof typeof target} */ (prop)]
		},
	})
}

export { env }

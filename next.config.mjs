import configureBundleAnalyzer from '@next/bundle-analyzer'

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful for
 * Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env.mjs'))

const withBundleAnalyzer = configureBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	swcMinify: true,
	reactStrictMode: true,
	poweredByHeader: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
		],
		domains: ['via.placeholder.com', 'unsplash.com'],
	},
	// i18n: {
	//   locales: ['en'],
	//   defaultLocale: 'en',
	// },
	// Experimental configs
	experimental: {
		appDir: true,
		typedRoutes: true,
		serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
	},
	async headers() {
		return [
			{
				source: '/favicon/:all*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, immutable, max-age=31536000',
					},
				],
			},
			{
				source: '/images/:all*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, immutable, max-age=31536000',
					},
				],
			},
			{
				source: '/login',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
				],
			},
			{
				source: '/register',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
				],
			},
			{
				source: '/:path*',
				headers: [
					{
						key: 'Referrer-Policy',
						value: 'no-referrer-when-downgrade',
					},
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on',
					},
				],
			},
		]
	},
}

const configExport = () => {
	const plugins = [withBundleAnalyzer]
	return plugins.reduce((acc, next) => next(acc), nextConfig)
}

export default configExport

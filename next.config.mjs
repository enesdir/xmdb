import configureBundleAnalyzer from '@next/bundle-analyzer'

import { env } from './src/env.mjs'

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful for
 * Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env.mjs'))

const withBundleAnalyzer = configureBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})

// https://securityheaders.com
const ContentSecurityPolicy = `
  default-src 'none';
  base-uri 'self';
  font-src 'self' https: data:;
  form-action 'self';
  frame-ancestors 'self';
  frame-src 'self';
  manifest-src 'self';
  object-src 'none';
  script-src 'self' ${env.NODE_ENV === 'development' ? "'unsafe-eval' 'unsafe-inline'" : ''};
  style-src 'self' https: 'unsafe-inline';
  img-src * blob: data:;
  connect-src 'self' https://vitals.vercel-insights.com/v1/vitals;
  worker-src 'self' blob:;
  upgrade-insecure-requests
`
const securityHeaders = [
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
	{
		key: 'Cross-Origin-Opener-Policy',
		value: 'same-origin',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy
	{
		key: 'Cross-Origin-Resource-Policy',
		value: 'same-origin',
	},
	// https://web.dev/origin-agent-cluster/
	{
		key: 'Origin-Agent-Cluster',
		value: '?1',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
	{
		key: 'Referrer-Policy',
		value: 'strict-origin-when-cross-origin',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
	// Opt-out of Google FLoC: https://amifloced.org/
	{
		key: 'Permissions-Policy',
		value: 'self',
	},
]

/** @link https://nextjs.org/docs/api-reference/next.config.js/introduction */
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
		domains: [
			'via.placeholder.com',
			'images.unsplash.com',
			'unsplash.com',
			'picsum.photos',
			'm.media-amazon.com',
		],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
		serverActions: true,
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders,
			},
			// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
			{
				source: '/favicon/:all*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, immutable, max-age=31536000',
					},
				],
			},
			// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
			{
				source: '/images/:all*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, immutable, max-age=31536000',
					},
				],
			},
			// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
			{
				source: '/login',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
				],
			},
			// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
			{
				source: '/register',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
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

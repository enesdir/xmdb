import configureBundleAnalyzer from '@next/bundle-analyzer'

// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
import { env } from './src/env.mjs'

const withBundleAnalyzer = configureBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})
const baseDomain = process.env.NEXT_PUBLIC_BASE_URL?.replace(/^(https?:)?\/\//, '')
const allowListBase =
	'wss://*.vercel.com vercel.com *.vercel.com *.vercel.sh *.github.com *.codesandbox.io chrome-extension://*'
const allowListExtended =
	'www.google.com www.google-analytics.com www.googleadservices.com www.gstatic.com *.googleapis.com'
// TODO: find better rule for script-src
// https://securityheaders.com
const ContentSecurityPolicy = `
  default-src 'self' ${baseDomain} ${allowListBase};
  base-uri 'self';
  font-src 'self' https: ${baseDomain} *.gstatic.com;
  form-action 'self';
  frame-ancestors 'self';
  frame-src 'self';
  child-src ${baseDomain} ${allowListBase} ${allowListExtended};
  manifest-src 'self';
  object-src 'none';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' ${baseDomain} ${allowListBase} ${allowListExtended};
  style-src 'self' 'unsafe-inline' ${baseDomain} ${allowListBase} ${allowListExtended};
  img-src * blob: data:;
  media-src 'self' ${baseDomain} ${allowListBase};
  connect-src data: *;
  worker-src 'self' ${baseDomain} blob:;
  block-all-mixed-content;
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
	// {
	// 	key: 'Cross-Origin-Resource-Policy',
	// 	value: 'same-origin',
	// },
	// {
	// 	key: 'Cross-Origin-Embedder-Policy',
	// 	value: 'require-corp',
	// },
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
		value: `fullscreen=(self "${env.NEXT_PUBLIC_BASE_URL}"), geolocation=(), camera=()`,
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=31536000; includeSubDomains; preload',
	},
]

/** @link https://nextjs.org/docs/api-reference/next.config.js/introduction */
/** @type {import('next').NextConfig} */
const nextConfig = {
	/**
	 * Dynamic configuration available for the browser and server. Note: requires `ssr: true` or a
	 * `getInitialProps` in `_app.tsx`
	 *
	 * @link https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
	 */
	publicRuntimeConfig: {
		VERCEL_ENV: env.VERCEL_ENV,
	},
	/** We run eslint as a separate task in CI */
	eslint: { ignoreDuringBuilds: !!process.env.CI },
	typescript: {
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
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	// Experimental configs
	experimental: {
		typedRoutes: true,
		serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
		outputFileTracingExcludes: {
			'/*': ['./public/favicon/**/*.png'],
			'/**/*': ['./public/favicon/**/*.png'],
			'*': [
				'node_modules/@swc/core-linux-x64-gnu',
				'node_modules/@swc/core-linux-x64-musl',
				'node_modules/@esbuild/linux-x64',
			],
		},
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders,
			},
			// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
			{
				source: '/manifest.webmanifest',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=0, must-revalidate',
					},
					// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition
					{
						key: 'content-disposition',
						value: 'inline; filename="manifest.webmanifest"',
					},
					{
						key: 'content-type',
						value: 'application/manifest+json; charset=utf-8',
					},
				],
			},
			// Add X-Robots-Tag header to all pages matching /sitemap.xml and /sitemap-models.xml /sitemap-articles.xml, etc
			{
				source: '/sitemap(-\\w+)?.xml',
				headers: [
					{ key: 'X-Robots-Tag', value: 'noindex' },
					{ key: 'Content-Type', value: 'application/xml' },
					{
						key: 'Cache-Control',
						value: 'public, max-age=0, must-revalidate',
					},
				],
			},
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
			// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
			{
				source: '/ap/login',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
				],
			},
			// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
			{
				source: '/ap/register',
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

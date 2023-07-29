import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { Roboto_Flex as Roboto } from 'next/font/google'

import { AppProviders } from '@/providers/AppProviders'

import '@/styles/global.css'

import { env } from '@/env.mjs'
import { cn } from '@/utils/cn'

const fontRoboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin', 'latin-ext'],
})
const title = 'XMDb'
const description =
	"YourMDb is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows. Get personalized recommendations, and learn where to watch across hundreds of streaming providers."
export const metadata: Metadata = {
	title: {
		template: '%s - XMDb',
		default: 'Example Site',
	},
	description,
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: env.NEXT_PUBLIC_BASE_URL,
		siteName: 'YourFlix',
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		creator: '@codenuru',
	},
	icons: {
		icon: {
			url: '/favicon/favicon-32x32.png',
			sizes: '32x32',
		},
		apple: '/favicon/apple-icon.png',
		shortcut: '/favicon/favicon.ico',
		other: [
			{
				rel: 'icon',
				url: '/favicon/favicon-16x16.png',
				sizes: '16x16',
			},
		],
	},
	manifest: '/favicon/site.webmanifest',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'cyan' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],

	metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
}
export default async function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<head />
			<body
				className={cn(
					'scroll-smooth font-default leading-none antialiased',
					fontRoboto.variable
					// 'm-2 sm:m-6 md:m-6 lg:m-4 xl:m-6'
				)}
			>
				<AppProviders>{children}</AppProviders>
			</body>
		</html>
	)
}

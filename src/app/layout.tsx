import { Roboto_Flex as Roboto } from 'next/font/google'

import { AppProviders } from '@/providers/AppProviders'

import type { Metadata, Viewport } from 'next'
import type { PropsWithChildren } from 'react'

import '@/styles/global.css'

import { cn } from '@/utils/cn'
import { siteConfig } from '../constants/siteConfig'

const fontRoboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin', 'latin-ext'],
})

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
}

export const metadata: Metadata = {
	title: {
		template: `%s - ${siteConfig.seoTitle}`,
		default: siteConfig.seoTitle,
	},
	description: siteConfig.seoDescription,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.siteUrl,
		title: siteConfig.seoTitle,
		description: siteConfig.seoDescription,
		siteName: siteConfig.seoTitle,
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.seoTitle,
		description: siteConfig.seoDescription,
		creator: siteConfig.og.twitterCreator,
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

	metadataBase: new URL(siteConfig.siteUrl),
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

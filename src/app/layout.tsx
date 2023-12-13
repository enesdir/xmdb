import { Roboto_Flex as Roboto } from 'next/font/google'
import { headers } from 'next/headers'

import { AppProviders } from '@/providers/AppProviders'

import type { Metadata, Viewport } from 'next'
import type { PropsWithChildren } from 'react'

import '@/styles/global.css'

import { siteConfig } from '@/constants/siteConfig'
import { auth } from '@/server/auth'
import { cn } from '@/utils/cn'

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
	robots: {
		follow: true,
		index: true,
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
		site: siteConfig.siteUrl,
	},

	icons: {
		icon: { url: `${siteConfig.siteUrl}/favicon/favicon-16x16.png`, type: 'image/png', sizes: '16x16' },
		apple: { url: `${siteConfig.siteUrl}/favicon/apple-icon.png`, type: 'image/png', sizes: '180x180' },
		shortcut: { url: `${siteConfig.siteUrl}/favicon/favicon.ico`, type: 'image/x-icon', sizes: '48x48' },
		other: [
			{
				url: `${siteConfig.siteUrl}/favicon/favicon-32x32.png`,
				type: 'image/png',
				sizes: '32x32',
			},
		],
	},

	metadataBase: new URL(siteConfig.siteUrl),
}
export default async function RootLayout({ children }: PropsWithChildren) {
	const session = await auth()
	if (session?.user)
		session.user = {
			id: session.user.id,
			name: session.user.name,
			email: session.user.email,
			username: session.user.username,
		} // filter out sensitive data
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
				{/* @ts-expect-error: todo */}
				<AppProviders session={session} headers={headers()}>
					{children}
				</AppProviders>
			</body>
		</html>
	)
}

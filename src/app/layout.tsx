import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/main/Header/Header'
import { Container } from '@/components/ui/Container/Container'
import { cn } from '@/lib/utils/cn'
import { AppProviders } from '@/providers/AppProviders'
import './global.css'

const fontInter = Inter({
	variable: '--font-inter',
	subsets: ['latin', 'latin-ext'],
})
const title = 'Document Management for Modern Validation Teams'
const description =
	'DocStore is an open-source document management tool for modern validation teams to create, track, and review documents.'

export const metadata: Metadata = {
	title: {
		template: '%s | YourFlix',
		default: 'Example Site',
	},
	description,
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://yourflix.vercel.app',
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

	metadataBase: new URL('https://yourflix.vercel.app'),
}
export default async function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<head />
			<body className={cn('min-h-screen scroll-smooth antialiased', fontInter.variable)}>
				<AppProviders>
					<Header />
					<Container as='main' className='px-2 py-9'>
						{children}
					</Container>
				</AppProviders>
			</body>
		</html>
	)
}

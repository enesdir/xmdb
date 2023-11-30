import { env } from '@/env.mjs'
import { PROJECT_NAME } from '@/lib/constants'

import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: 'Privacy',
		openGraph: {
			type: 'website',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/privacy`,
		},
	}
}

export default async function LatestShowsPage() {
	return (
		<>
			<h1 className='text-3xl font-semibold'>Conditions</h1>
		</>
	)
}

import { PROJECT_NAME } from '@/constants/appConfigurations'
import { env } from '@/env.mjs'

import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: 'Conditions',
		openGraph: {
			type: 'website',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/conditions`,
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

import type { PropsWithChildren } from 'react'

import { APFooter } from './footer'

export default async function WebsiteLayoutContainer({ children }: PropsWithChildren) {
	return (
		<main className='flex h-screen w-full flex-col items-center bg-white'>
			{children}
			<APFooter />
		</main>
	)
}

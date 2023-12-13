import { Footer, Header } from '@/features/layout'
import { auth } from '@/server/auth'

import type { PropsWithChildren } from 'react'

export default async function WebsiteLayoutContainer({ children }: PropsWithChildren) {
	const session = await auth()
	return (
		<div className='bg-black'>
			<Header session={session} />
			{children}
			<Footer />
		</div>
	)
}

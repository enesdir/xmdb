import type { PropsWithChildren } from 'react'

import { Footer, Header } from '@/features/layout'
import { getCurrentUser } from '@/lib/session'

export default async function WebsiteLayoutContainer({ children }: PropsWithChildren) {
	const user = await getCurrentUser()
	return (
		<div className='bg-black'>
			<Header user={user} />
			{children}
			<Footer />
		</div>
	)
}

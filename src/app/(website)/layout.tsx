import { Footer, Header } from '@/features/layout'
import { getCurrentUser } from '@/lib/session'

import type { PropsWithChildren } from 'react'

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

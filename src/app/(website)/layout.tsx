import type { PropsWithChildren } from 'react'
import { Footer, Header } from '@/features/layout'
import { MainWrapper } from '@/features/layout/components/MainWrapper'
import { getCurrentUser } from '@/lib/session'

export default async function WebsiteLayoutContainer({ children }: PropsWithChildren) {
	const user = await getCurrentUser()
	return (
		<>
			<Header user={user} />
			<MainWrapper>{children}</MainWrapper>
			<Footer />
		</>
	)
}

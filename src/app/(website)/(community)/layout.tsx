import type { PropsWithChildren } from 'react'

import { MainWrapper } from '@/features/layout/components/MainWrapper'

export default async function CommunityLayoutContainer({ children }: PropsWithChildren) {
	return (
		<>
			<MainWrapper>{children}</MainWrapper>
		</>
	)
}

import type { PropsWithChildren } from 'react'

import { MainWrapper } from '@/features/layout/components/MainWrapper'

export default function UserLayout({ children }: PropsWithChildren) {
	return <MainWrapper>{children}</MainWrapper>
}

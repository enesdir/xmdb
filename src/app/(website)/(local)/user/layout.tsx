import { MainWrapper } from '@/components/Containers/MainWrapper'

import type { PropsWithChildren } from 'react'

export default function UserLayout({ children }: PropsWithChildren) {
	return <MainWrapper variant='white'>{children}</MainWrapper>
}

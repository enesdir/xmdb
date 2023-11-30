import { MainWhiteWrapper } from '@/components/Containers/MainWhiteWrapper'

import type { PropsWithChildren } from 'react'

export default function UserLayout({ children }: PropsWithChildren) {
	return <MainWhiteWrapper>{children}</MainWhiteWrapper>
}

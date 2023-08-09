import type { PropsWithChildren } from 'react'

import { MainWhiteWrapper } from '@/components/Containers/MainWhiteWrapper'

export default function UsersLayout({ children }: PropsWithChildren) {
	return <MainWhiteWrapper>{children}</MainWhiteWrapper>
}

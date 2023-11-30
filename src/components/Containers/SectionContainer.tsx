import { PageContainer } from './PageContainer'

import type { PropsWithChildren } from 'react'

export const SectionContainer = ({ children }: PropsWithChildren) => {
	return (
		<div className='w-full bg-[--brand-black]'>
			<PageContainer>{children}</PageContainer>
		</div>
	)
}

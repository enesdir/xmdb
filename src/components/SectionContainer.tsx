import type { PropsWithChildren } from 'react'
import { PageContainer } from './PageContainer'

export const SectionContainer = ({ children }: PropsWithChildren) => {
	return (
		<div className='w-full bg-[--brand-black]'>
			<PageContainer>{children}</PageContainer>
		</div>
	)
}

import { cn } from '@/utils/cn'
import { PageContainer } from './PageContainer'

import type { PropsWithChildren } from 'react'

export enum SectionContainerVariant {
	'white',
	'black',
}
type MainWrapperProps = Readonly<
	{
		className?: string
		variant?: keyof typeof SectionContainerVariant
	} & PropsWithChildren
>
export const MainWrapper = ({ children, className, variant = 'white' }: MainWrapperProps) => {
	return (
		<main
			className={cn(
				'relative min-h-[67vh] min-w-[300px] text-base font-normal normal-case leading-6 tracking-[0.03125em]',
				{ 'bg-white text-black': variant === 'white', 'bg-black text-white': variant === 'black' },
				className
			)}
		>
			<PageContainer full>{children}</PageContainer>
		</main>
	)
}

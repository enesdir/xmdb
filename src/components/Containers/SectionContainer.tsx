import { cn } from '@/utils/cn'
import { PageContainer } from './PageContainer'

import type { ReactNode } from 'react'

export enum SectionContainerVariant {
	'default',
	'primary',
	'secondary',
}

export type SectionContainerProps = Readonly<{
	as?: keyof JSX.IntrinsicElements
	variant?: keyof typeof SectionContainerVariant
	className?: string
	children: ReactNode
}>
export const SectionContainer = ({
	as: As = 'section',
	children,
	className,
	variant = 'default',
}: SectionContainerProps) => {
	return (
		<As
			className={cn(
				'w-full',
				{
					'bg-brand-black': variant === 'default',
					'bg-brand-black3 md:bg-black': variant === 'primary',
					'bg-white/80 md:bg-white/90': variant === 'secondary',
				},
				className
			)}
		>
			<PageContainer center>{children}</PageContainer>
		</As>
	)
}

import type { PropsWithChildren } from 'react'

import { cn } from '@/utils/cn'

type ContainerProps = Readonly<
	{
		as?: keyof JSX.IntrinsicElements
		className?: string
	} & PropsWithChildren
>

export const Container = ({ as: As = 'div', className, children }: ContainerProps) => (
	<As className={cn('container mx-auto', className)}>{children}</As>
)

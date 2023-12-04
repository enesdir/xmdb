import { cn } from '@/utils/cn'

import type { PropsWithChildren } from 'react'

type PageContainerProps = Readonly<
	{
		as?: keyof JSX.IntrinsicElements
		className?: string
		center?: boolean
		full?: boolean
	} & PropsWithChildren
>

export const PageContainer = ({ as: As = 'div', className, children, center, full }: PageContainerProps) => (
	<As
		className={cn(
			'relative mx-auto my-0 p-0',
			{
				'min-h-[3.5rem] w-full items-center border-none text-base lg:max-w-screen-lg xl:max-w-screen-xl':
					center,
				'w-full': full,
			},
			className
		)}
		role='presentation'
	>
		{children}
	</As>
)

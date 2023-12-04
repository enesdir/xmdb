import { cn } from '@/utils/cn'

import type { BaseComponentProps } from '@/types/BaseComponentProps'
import type { HTMLAttributes } from 'react'

type ListProps = Readonly<
	{
		variant?: 'default' | 'inline'
	} & HTMLAttributes<HTMLUListElement> &
		BaseComponentProps
>
export const List = ({ children, className, variant, ...rest }: ListProps) => {
	return (
		<ul
			className={cn(
				'list-none list-image-none',
				{ 'm-0 flex flex-col p-0': variant === 'default' },
				{ 'm-0 inline-flex flex-wrap items-center p-0': variant === 'inline' },
				className
			)}
			role='presentation'
			{...rest}
		>
			{children}
		</ul>
	)
}

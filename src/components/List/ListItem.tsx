import { cn } from '@/utils/cn'

import type { BaseComponentProps } from '@/types/BaseComponentProps'
import type { LiHTMLAttributes } from 'react'

type ListItemProps = Readonly<
	{
		variant?: 'default' | 'inline'
	} & LiHTMLAttributes<HTMLLIElement> &
		BaseComponentProps
>
export const ListItem = ({ children, className, variant, ...rest }: ListItemProps) => {
	return (
		<li
			className={cn(
				' truncate',
				{ 'relative z-0 flex min-h-[3rem] flex-wrap items-center py-3': variant === 'default' },
				{ 'inline-block align-middle text-inherit': variant === 'inline' },
				className
			)}
			role='presentation'
			{...rest}
		>
			{children}
		</li>
	)
}

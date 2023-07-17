import type { LiHTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '@/lib/utils/cn'

type ListItemProps = LiHTMLAttributes<HTMLLIElement> &
	PropsWithChildren & {
		className?: string
	}
export const ListItem = ({ children, className, ...rest }: ListItemProps) => {
	return (
		<li
			className={cn('mx-2 inline-block list-outside list-none list-image-none', className)}
			role='presentation'
			{...rest}
		>
			{children}
		</li>
	)
}

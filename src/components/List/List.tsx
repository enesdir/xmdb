import type { HTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '@/lib/utils/cn'

type ListProps = HTMLAttributes<HTMLUListElement> &
	PropsWithChildren & {
		className?: string
	}
export const List = ({ children, className, ...rest }: ListProps) => {
	return (
		<ul
			className={cn(
				'm-0 inline-flex list-outside list-none list-image-none flex-wrap items-center p-0 sm:inline-flex',
				className
			)}
			role='presentation'
			{...rest}
		>
			{children}
		</ul>
	)
}

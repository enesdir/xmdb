import { List } from '@/components/List'
import { cn } from '@/utils/cn'

import type { ComponentPropsWithoutRef } from 'react'

const sizes = {
	sm: 'w-8',
	md: 'w-12',
	// md: 'w-16',
	lg: 'w-32',
	xl: 'w-56',
} as const

export type DropdownItemsProps = Readonly<
	{ size?: keyof typeof sizes } & ({ isHidden: boolean } & ComponentPropsWithoutRef<'div'>)
>
export const DropdownItems = ({
	isHidden,
	size = 'sm',
	className,
	children,
	...rest
}: DropdownItemsProps) => {
	return (
		<div
			className={cn(
				'absolute z-20 mt-10 w-32 overflow-hidden rounded-md bg-[#1f1f1f] py-2 shadow-xl',
				sizes[size],
				isHidden && 'hidden',
				className
			)}
			{...rest}
		>
			<List role='menu' aria-orientation='vertical'>
				{children}
			</List>
		</div>
	)
}

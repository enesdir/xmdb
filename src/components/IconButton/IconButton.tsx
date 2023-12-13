import { forwardRef } from 'react'

import { cn } from '@/utils/cn'

import type { ComponentPropsWithRef, ReactNode } from 'react'

type IconButtonProps = Readonly<
	{
		variant?: 'default' | 'danger' | 'ghost' | 'rounded' | 'close' | 'base'
		disabled?: boolean
		onClick?: () => void
		label: string
		icon: ReactNode
		className?: string
	} & ComponentPropsWithRef<'button'>
>

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	({ variant = 'default', disabled, className, onClick, label, icon }, ref) => {
		return (
			<button
				ref={ref}
				type='button'
				aria-label={label}
				disabled={disabled}
				onClick={onClick}
				className={cn(
					'inline-flex border-0 border-transparent transition-colors disabled:pointer-events-none disabled:opacity-50',
					{
						'rounded-md p-1 text-gray-600 hover:bg-gray-100 hover:text-blue-500': variant === 'default',
						'rounded-md p-1 text-red-600 hover:border-red-600 hover:bg-red-600/20': variant === 'danger',
						'rounded-full bg-transparent p-3 hover:bg-brand-black4': variant === 'rounded',
						'rounded-md bg-transparent px-4 py-2 hover:bg-brand-black4': variant === 'ghost',
						'rounded-full p-1': variant === 'close',
						'text-black/40 hover:text-black/50': variant === 'base',
					},
					className
				)}
			>
				{icon}
			</button>
		)
	}
)

IconButton.displayName = 'IconButton'

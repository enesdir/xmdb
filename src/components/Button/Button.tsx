import { forwardRef } from 'react'

import { Spinner } from '@/components/Spinner'
import { cn } from '@/utils/cn'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export enum ButtonVariant {
	'default',
	'primary',
	'danger',
	'text',
	'brand',
}
export type ButtonProps = Readonly<
	{
		type?: 'button' | 'submit' | 'reset'
		isLoading?: boolean
		disabled?: boolean
		onClick?: () => void
		fill?: boolean
		variant?: keyof typeof ButtonVariant
		icon?: ReactNode
		children: ReactNode
	} & ComponentPropsWithRef<'button'>
>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ type = 'button', disabled, onClick, fill, variant = 'default', icon, isLoading, children, className },
		ref
	) => {
		return (
			<button
				ref={ref}
				type={type}
				disabled={disabled || isLoading}
				onClick={onClick}
				className={cn(
					'duration-250 focus-visible:ring-primary-500 items-center justify-center gap-x-1.5 rounded-lg border px-4 py-2 font-medium shadow-sm transition-colors duration-75 focus:outline-none focus-visible:ring disabled:pointer-events-none disabled:opacity-75',
					fill ? 'w-full' : 'w-fit',
					{
						'border-blue-400 bg-blue-400 text-white hover:bg-blue-600': variant === 'primary',
						'dark:bg-gray bg-white text-black': variant === 'default',
						'border-red-600 text-red-600 hover:bg-red-600/10': variant === 'danger',
						'border-none text-white shadow-none hover:bg-[#2b2b2b]': variant === 'text',
						'rounded-lg border border-solid border-[#F2C200] bg-[#FFD814] align-middle font-sans text-xs leading-5 hover:bg-[#F7CA00]':
							variant === 'brand',
					},
					className
				)}
			>
				{isLoading && (
					<div className='text-sm'>
						<Spinner size='sm' />
					</div>
				)}
				{icon && <div className='text-sm'>{icon}</div>}
				{children}
			</button>
		)
	}
)
Button.displayName = 'Button'

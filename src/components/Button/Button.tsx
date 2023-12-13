import { forwardRef } from 'react'

import { Spinner } from '@/components/Spinner'
import { cn } from '@/utils/cn'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export enum ButtonVariant {
	'default',
	'primary',
	'secondary',
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
					'flex items-center justify-center gap-x-1.5 px-4 py-2 font-medium shadow-sm transition-colors duration-75 focus:outline-none disabled:pointer-events-none disabled:opacity-75',
					fill ? 'w-full' : 'w-fit',
					{
						'rounded-lg border border-slate-300 bg-slate-300 text-black hover:bg-slate-200':
							variant === 'primary',
						'border-none bg-white/[0.08] text-brand-blue hover:bg-brand-gray3/75': variant === 'secondary',
						'dark:bg-gray rounded bg-white text-black': variant === 'default',
						'rounded-lg border border-red-600 text-red-600 hover:bg-red-600/10': variant === 'danger',
						'rounded-lg border-none text-white shadow-none hover:bg-brand-black4': variant === 'text',
						'rounded-lg border border-solid border-brand-yellow6 bg-brand-yellow7 align-middle font-sans text-xs leading-5 hover:bg-brand-yellow5':
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
				{icon && icon}
				{children}
			</button>
		)
	}
)
Button.displayName = 'Button'

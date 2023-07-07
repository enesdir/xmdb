import { forwardRef, type ComponentPropsWithRef, type ReactNode } from 'react'
import { Spinner } from '@/components/'
import { cn } from '@/lib/utils/cn'

export enum ButtonVariant {
	'default',
	'primary',
	'danger',
	'text',
}
type ButtonProps = Readonly<
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
					'duration-250 focus-visible:ring-primary-500 inline-flex items-center justify-center gap-x-1.5 rounded-lg border px-5 py-2.5 font-medium shadow-sm transition-colors duration-75 focus:outline-none focus-visible:ring disabled:pointer-events-none disabled:opacity-75',
					fill ? 'w-full' : 'w-fit',
					[
						variant === 'primary' && ['border-blue-400 bg-blue-400 text-white hover:bg-blue-600'],
						variant === 'default' && ['dark:bg-gray bg-white text-black'],
						variant === 'danger' && ['border-red-600 text-red-600 hover:bg-red-600/10'],
						variant === 'text' && ['border-transparent p-0.5 text-black shadow-none hover:bg-gray-100'],
					],
					className
				)}
			>
				{isLoading && (
					<div className='text-sm'>
						<Spinner size='xs' />
					</div>
				)}
				{icon && <div className='text-sm'>{icon}</div>}
				{children}
			</button>
		)
	}
)
Button.displayName = 'Button'
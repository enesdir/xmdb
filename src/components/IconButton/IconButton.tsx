import { forwardRef, type ComponentPropsWithRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

type IconButtonProps = Readonly<
	{
		variant?: 'default' | 'danger' | 'ghost' | 'rounded'
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
					'duration-250 rounded-md border-0 border-transparent p-1 transition-colors disabled:pointer-events-none disabled:opacity-50 sm:flex',
					variant === 'default' && 'text-gray-600 hover:bg-gray-100 hover:text-blue-500',
					variant === 'danger' && 'text-red-600 hover:border-red-600 hover:bg-red-600/20',
					variant === 'rounded' && 'rounded-full bg-transparent p-3 hover:bg-[#2b2b2b]',
					variant === 'ghost' && 'hidden bg-transparent px-4 py-2 hover:bg-[#2b2b2b]',
					className
				)}
			>
				{icon}
			</button>
		)
	}
)

IconButton.displayName = 'IconButton'

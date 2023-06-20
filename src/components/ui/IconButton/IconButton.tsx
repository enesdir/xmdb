import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

type IconButtonProps = Readonly<{
	variant?: 'default' | 'danger'
	disabled?: boolean
	onClick?: () => void
	label: string
	icon: ReactNode
}>

export const IconButton = ({ variant = 'default', disabled, onClick, label, icon }: IconButtonProps) => (
	<button
		type='button'
		aria-label={label}
		disabled={disabled}
		onClick={onClick}
		className={cn(
			'duration-250 rounded-md border border-transparent p-1 transition-colors disabled:pointer-events-none disabled:opacity-50',
			variant === 'default' && 'hover:text-primary text-gray-600 hover:bg-gray-100',
			variant === 'danger' && 'text-red-600 hover:border-red-600 hover:bg-red-600/20'
		)}
	>
		{icon}
	</button>
)

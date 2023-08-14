import type { ComponentPropsWithRef, ReactNode } from 'react'

import { forwardRef } from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

import { Spinner } from '@/components/Spinner'
import { cn } from '@/utils/cn'

export type ButtonProps = Readonly<
	{
		isLoading?: boolean
		disabled?: boolean
		onClick?: () => void
		isOpen: boolean
		icon?: ReactNode
		children: ReactNode
	} & ComponentPropsWithRef<'button'>
>

export const DropdownButton = forwardRef<HTMLButtonElement, ButtonProps>(
	({ disabled, onClick, isOpen, icon, isLoading, children, className }, ref) => {
		return (
			<button
				ref={ref}
				type='button'
				disabled={disabled || isLoading}
				onClick={onClick}
				className={cn(
					'duration-250 focus-visible:ring-primary-500 inline-flex w-fit items-center justify-center gap-x-1.5 rounded-md border-0 border-none border-transparent bg-transparent px-4 py-2 text-sm font-extrabold text-white shadow-none transition-colors duration-75 hover:bg-[#2b2b2b] focus:outline-none focus-visible:ring disabled:pointer-events-none disabled:opacity-75',
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
				{isOpen ? <FaCaretUp /> : <FaCaretDown />}
			</button>
		)
	}
)
DropdownButton.displayName = 'DropdownButton'

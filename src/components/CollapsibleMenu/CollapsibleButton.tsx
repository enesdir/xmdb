import { type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { cn } from '@/lib/utils/cn'

export type CollapsibleButtonProps = Readonly<
	{
		onClick?: () => void
		isOpen: boolean
		icon?: ReactNode
		title: string
	} & ComponentPropsWithoutRef<'div'>
>

export const CollapsibleButton = ({ onClick, isOpen, icon, title, className }: CollapsibleButtonProps) => {
	return (
		<div
			role='button'
			aria-label={`Collapse ${title} Nav Links`}
			onClick={onClick}
			className={cn(
				'cursor-pointer select-none px-4 py-2 text-base font-normal normal-case leading-6 tracking-[0.03125em] text-[--brand-white] opacity-50 hover:opacity-100',

				{ 'text-[--brand-yellow] opacity-100': isOpen },
				'lg:pointer-events-none lg:text-[--brand-yellow] lg:opacity-100',

				className
			)}
		>
			<span className='m-0 flex items-center justify-between'>
				{icon && <div className='pr-3 text-2xl  '>{icon}</div>}
				<span className='grow whitespace-break-spaces break-words pr-3 tracking-wider !opacity-100'>
					{title}
				</span>
				<span className='text-2xl lg:hidden'>
					<IoIosArrowDown className={cn({ 'rotate-180': isOpen })} />
				</span>
			</span>
		</div>
	)
}

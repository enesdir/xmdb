import { type ComponentPropsWithoutRef } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import { cn } from '@/utils/cn'

export type CrewMobileButtonProps = Readonly<
	{
		onClick?: () => void
		isOpen: boolean
		title: string
	} & ComponentPropsWithoutRef<'button'>
>

export const CrewMobileButton = ({ onClick, isOpen, title, className }: CrewMobileButtonProps) => {
	return (
		<button
			role='button'
			aria-label={`Collapse ${title} Nav Links`}
			onClick={onClick}
			className={cn(
				'inline-block cursor-pointer select-none p-0 text-base font-normal normal-case leading-6 tracking-brand-wide text-white hover:underline focus:underline',
				{ 'pb-2': isOpen },
				className
			)}
		>
			<IoIosArrowDown className={cn('mr-1 inline align-bottom text-xl', { 'rotate-180': isOpen })} />
			{title}
		</button>
	)
}

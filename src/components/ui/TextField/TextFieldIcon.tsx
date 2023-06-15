import type { ReactNode } from 'react'
import { cn } from '../../../lib/utils/cn'

type TextFieldIconProps = Readonly<{
	error?: boolean
	icon: ReactNode
}>

export const TextFieldIcon = ({ error, icon }: TextFieldIconProps) => (
	<div
		className={cn(
			'duration-250 absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-500 transition-colors',
			error && 'text-red-700'
		)}
	>
		{icon}
	</div>
)

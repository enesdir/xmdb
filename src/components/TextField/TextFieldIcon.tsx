import { cn } from '@/utils/cn'

import type { ReactNode } from 'react'

type TextFieldIconProps = Readonly<{
	error?: boolean
	icon: ReactNode
	position: 'left' | 'right'
}>
type PositionsType = {
	[key in TextFieldIconProps['position']]: string
}
export const TextFieldIcon = ({ error, icon, position }: TextFieldIconProps) => {
	const positions: PositionsType = {
		left: 'left-3',
		right: 'right-3',
	}
	return (
		<div
			className={cn(
				'absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-500 transition-colors',
				error && 'text-red-700',
				positions[position]
			)}
		>
			{icon}
		</div>
	)
}

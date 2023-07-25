import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

const Label = ({
	children,
	animateRerendering,
	color,
}: {
	children: ReactNode
	animateRerendering?: boolean
	color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange'
}) => {
	return (
		<div
			className={cn('rounded-full px-1.5 shadow-[0_0_1px_3px_black]', {
				'bg-gray-800 text-gray-300': color === 'default',
				'bg-pink-600 text-white': color === 'pink',
				'bg-blue-600 text-white': color === 'blue',
				'bg-cyan-600 text-white': color === 'cyan',
				'bg-violet-600 text-violet-100': color === 'violet',
				'bg-orange-600 text-white': color === 'orange',
				'animate-[highlight_1s_ease-in-out_1]': animateRerendering,
			})}
		>
			{children}
		</div>
	)
}
export const Boundary = ({
	children,
	labels = ['children'],
	size = 'default',
	color = 'default',
	animateRerendering = true,
}: {
	children: React.ReactNode
	labels?: string[]
	size?: 'small' | 'default'
	color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange'
	animateRerendering?: boolean
}) => {
	return (
		<div
			className={cn('relative mt-20 rounded-lg border border-dashed', {
				'p-3 lg:p-5': size === 'small',
				'm-0 w-full items-center bg-[--brand-black] p-0 text-base md:mx-auto md:my-0 md:px-3 md:py-0 lg:max-w-screen-lg xl:max-w-screen-xl':
					size === 'default',
				'border-gray-700': color === 'default',
				'border-pink-700': color === 'pink',
				'border-blue-700': color === 'blue',
				'border-cyan-700': color === 'cyan',
				'border-violet-700': color === 'violet',
				'border-orange-700': color === 'orange',
				'animate-[rerender_1s_ease-in-out_1] text-gray-100': animateRerendering,
			})}
		>
			<div
				className={cn('-top-6.5 absolute flex gap-x-1 text-[9px] uppercase leading-4 tracking-widest', {
					'right-3 lg:right-5': size === 'small',
					'right-4 lg:right-9': size === 'default',
				})}
			>
				{labels.map((label) => {
					return (
						<Label key={label} color={color} animateRerendering={animateRerendering}>
							{label}
						</Label>
					)
				})}
			</div>

			{children}
		</div>
	)
}

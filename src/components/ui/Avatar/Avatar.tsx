import type { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils/cn'

const sizes = {
	xs: 'h-8 w-8',
	sm: 'h-11 w-11',
	md: 'h-16 w-16',
	lg: 'h-28 w-28',
	xl: 'h-36 w-36',
} as const

type AvatarProps = Readonly<
	{ size?: keyof typeof sizes } & (
		| {
				src: string
				alt: string
				children?: undefined
		  }
		| { children: ReactNode; src?: undefined; alt?: undefined }
	)
>

export const Avatar = ({ size = 'sm', src, alt, children }: AvatarProps) => (
	<div
		className={cn(
			'relative shrink-0 overflow-hidden rounded-full',
			sizes[size],
			children &&
				'flex items-center justify-center bg-blue-600 font-medium text-white dark:bg-blue-200 dark:text-blue-600'
		)}
	>
		{src && <Image className='object-cover' src={src} alt={alt} fill />}
		{children}
	</div>
)

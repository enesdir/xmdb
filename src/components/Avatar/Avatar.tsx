import Image from 'next/image'
import { IoPersonCircleSharp } from 'react-icons/io5'

import { cn } from '@/utils/cn'

import type { ReactNode } from 'react'

const sizes = {
	'2xs': 'h-5 w-5',
	sm: 'h-8 w-8',
	md: 'h-11 w-11',
	// md: 'h-16 w-16',
	lg: 'h-28 w-28',
	xl: 'h-36 w-36',
} as const

type AvatarProps = Readonly<
	{ size?: keyof typeof sizes } & (
		| {
				src: string
				alt: string
				children?: undefined
				icon?: undefined
		  }
		| { children: ReactNode; src?: undefined; alt?: undefined; icon?: undefined }
		| { icon: boolean; src?: undefined; alt?: undefined; children?: undefined }
	)
>

export const Avatar = ({ size = 'sm', src, alt, children, icon }: AvatarProps) => {
	if (icon) {
		return <IoPersonCircleSharp className={cn('-p-1 text-white', sizes[size])} fill='white' stroke='white' />
	}
	return (
		<div
			className={cn('relative shrink-0 overflow-hidden rounded-full', sizes[size], {
				'flex items-center justify-center bg-blue-600 font-medium text-white dark:bg-blue-200 dark:text-blue-600':
					children,
			})}
		>
			{src && <Image className='object-cover' src={src} alt={alt} fill />}
			{children}
		</div>
	)
}

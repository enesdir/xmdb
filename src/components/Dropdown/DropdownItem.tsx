import type { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils/cn'
import { ListItem } from '../List'

export type DropdownItemProps<T> = Readonly<
	| {
			icon?: ReactNode
			children: ReactNode
			className?: string
	  } & (
			| {
					href?: __next_route_internal_types__.RouteImpl<T>
					onClick?: undefined
			  }
			| { onClick?: () => void; href?: undefined }
	  )
>

export const DropdownItem = <T,>({ onClick, icon, href, className, children }: DropdownItemProps<T>) => {
	const styles = cn(
		'flex w-full items-center gap-x-1.5 whitespace-nowrap px-3.5 py-2.5 text-sm capitalize text-gray-300 transition-colors hover:bg-white/5 hover:text-white active:bg-white/30',
		className
	)

	return (
		<ListItem className='m-0 w-full' role='menuitem' aria-disabled='false' tabIndex={0}>
			{href ? (
				<Link href={href} className={styles}>
					{icon}
					{children}
				</Link>
			) : (
				<button onClick={onClick} className={styles} type='button'>
					{icon}
					{children}
				</button>
			)}
		</ListItem>
	)
}

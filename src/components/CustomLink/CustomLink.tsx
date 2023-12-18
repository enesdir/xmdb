import Link from 'next/link'
import { MdLaunch } from 'react-icons/md'

import { cn } from '@/utils/cn'

import type { LinkProps } from 'next/link'

const externalPrefixes = ['http', 'tel:', 'mailto:'] as const

const isExternal = (href: string): href is ExternalLink => {
	return externalPrefixes.some((prefix) => href.startsWith(prefix))
}
export type InternalLink<T> = LinkProps<T>['href']
export type ExternalLink = `${(typeof externalPrefixes)[number]}${string}`
type Variant = 'classic' | 'modern' | 'button' | 'title' | 'poster'

const variants: Record<Variant, string> = {
	classic:
		'inline-flex space-x-1 text-[#0066c0] hover:cursor-pointer hover:text-[#c45500] hover:underline focus:outline-4 focus:-outline-offset-2 active:scale-95',
	modern:
		'relative m-0 inline-block cursor-pointer border-none text-center no-underline p-2 text-white/95 hover:bg-none hover:underline',
	button:
		'inline-flex truncate border-none text-white shadow-none hover:bg-brand-black4 px-4 py-2 text-sm font-extrabold rounded-md w-fit',
	title: 'inline-block no-underline hover:cursor-pointer text-inherit',
	poster:
		'relative m-0 cursor-pointer border-none no-underline px-2 text-white/95 hover:bg-none hover:underline h-12 line-clamp-2 text-base text-ellipsis',
}

const commonClass = 'items-center'
type CustomLinkProps<T> = {
	href: InternalLink<T> | ExternalLink
	hasExternalIcon?: boolean
	className?: string
	variant: Variant
} & Omit<LinkProps<T>, 'href'>

export const CustomLink = <T,>({
	as,
	href,
	scroll,
	shallow,
	replace,
	children,
	className,
	variant,
	hasExternalIcon,
	...rest
}: CustomLinkProps<T>) => {
	if (typeof href === 'string' && isExternal(href)) {
		return (
			<a
				href={href as string}
				target='_blank'
				{...rest}
				rel='noopener noreferrer'
				className={cn(commonClass, variants[variant], className)}
			>
				{children}
				{hasExternalIcon && (
					<MdLaunch
						className='mr-1 inline-block h-4 w-4 overflow-hidden fill-white/95 align-middle transition'
						aria-label='External Link Icon'
					/>
				)}
			</a>
		)
	}
	return (
		<Link
			shallow={shallow}
			scroll={scroll}
			replace={replace}
			href={href}
			as={as}
			{...rest}
			className={cn(commonClass, variants[variant], className)}
		>
			{children}
		</Link>
	)
}

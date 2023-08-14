import type { LinkProps } from 'next/link'

import Link from 'next/link'

import { cn } from '@/utils/cn'

const externalPrefixes = ['http', 'tel:', 'mailto:'] as const

const isExternal = (href: string): href is ExternalLink => {
	return externalPrefixes.some((prefix) => href.startsWith(prefix))
}
export type InternalLink<T> = LinkProps<T>['href']
export type ExternalLink = `${(typeof externalPrefixes)[number]}${string}`
type Variant = 'classic' | 'modern' | 'button'

const variants: Record<Variant, string> = {
	classic:
		'space-x-1 text-[#0066c0] hover:cursor-pointer hover:text-[#c45500] hover:underline focus:outline-4 focus:-outline-offset-2 active:scale-95',
	modern:
		'relative m-0 inline-block cursor-pointer border-none text-center no-underline p-2 text-white/95 hover:bg-none hover:underline',
	button:
		'truncate border-none text-white shadow-none hover:bg-[#2b2b2b] px-4 py-2 text-sm font-extrabold rounded-md w-fit',
}

const commonClass = 'inline-flex items-center max-w-full'
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
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='mr-1 inline-block h-4 w-4 overflow-hidden align-middle text-white/95 transition'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth='2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
						/>
					</svg>
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

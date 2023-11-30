import { cn } from '@/utils/cn'

import type { AnchorHTMLAttributes } from 'react'

export type BaseLinkProps = Readonly<
	{
		className?: string
		href: string
		label: string
	} & AnchorHTMLAttributes<HTMLAnchorElement>
>

export const BaseLink = ({ children, className, label, href, ...props }: BaseLinkProps) => {
	return (
		<a
			role='button'
			target='_blank'
			rel='nofollow noopener'
			tabIndex={0}
			href={href}
			className={cn(
				'relative m-0 inline-block cursor-pointer border-none text-center no-underline',
				className
			)}
			{...props}
			aria-disabled='false'
			title={label}
			aria-label={label}
		>
			{children}
		</a>
	)
}

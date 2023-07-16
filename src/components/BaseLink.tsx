import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

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
				'relative m-0 inline-block cursor-pointer border-none no-underline hover:bg-white/10',
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

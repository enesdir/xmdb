import Link from 'next/link'
import { cn } from '@/utils/cn'

type AuthLinkProps = Readonly<{ href: string; label: string; hasIcon?: boolean; className?: string }>
export const AuthLink = ({ href, label, hasIcon, className }: AuthLinkProps) => {
	return (
		<Link
			className={cn(
				'inline-flex items-center space-x-1 text-[#0066c0] hover:cursor-pointer hover:text-[#c45500] hover:underline focus:outline-4 focus:-outline-offset-2 active:scale-95',
				className
			)}
			// @ts-expect-error todo
			href={href}
		>
			<span>{label}</span>
			{hasIcon && (
				<span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						stroke-width='2'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
						/>
					</svg>
				</span>
			)}
		</Link>
	)
}

import Link from 'next/link'
import { PROJECT_NAME } from '@/lib/constants'
import { cn } from '@/utils/cn'

type LogoProps = Readonly<{
	className?: string
}>
export const Logo = ({ className }: LogoProps) => {
	return (
		<div className=''>
			<Link
				href='/'
				className={cn(
					'relative order-1 ml-1 mr-auto flex shrink-0 select-none items-center rounded-md bg-[#f5c518] p-1 text-2xl font-extrabold text-gray-900',
					className
				)}
			>
				{PROJECT_NAME}
			</Link>
		</div>
	)
}

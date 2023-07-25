import Link from 'next/link'
import { PROJECT_NAME } from '@/lib/constants'
import { cn } from '@/utils/cn'

type LogoProps = Readonly<{
	className?: string
}>
export const Logo = ({ className }: LogoProps) => {
	return (
		<Link
			href='/'
			className={cn(
				'order-none ml-1 mr-auto flex shrink-0 select-none items-center justify-center',
				className
			)}
		>
			<span className='rounded-md bg-[#f5c518] p-2 text-xl font-black leading-none text-[--brand-black]'>
				{PROJECT_NAME}
			</span>
		</Link>
	)
}

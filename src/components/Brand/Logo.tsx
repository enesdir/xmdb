import Link from 'next/link'

import { PROJECT_NAME } from '@/constants/appConfigurations'
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
			<span className='rounded-md bg-brand-yellow p-2 text-xl font-black leading-none text-brand-black'>
				{PROJECT_NAME}
			</span>
		</Link>
	)
}

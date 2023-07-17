import Link from 'next/link'
import { PROJECT_NAME } from '@/lib/constants'

export const Logo = () => {
	return (
		<div className=''>
			<Link
				href='/'
				className='relative order-1 ml-1 mr-auto flex shrink-0 select-none items-center rounded-md bg-[#f5c518] p-1 text-2xl font-extrabold text-gray-900'
			>
				{PROJECT_NAME}
			</Link>
		</div>
	)
}

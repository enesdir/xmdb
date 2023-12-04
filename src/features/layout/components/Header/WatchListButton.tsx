import { BsFillBookmarkPlusFill } from 'react-icons/bs'

import { Button } from '@/components/Button'

export const WatchListButton = () => {
	return (
		<Button
			className='order-6 hidden lg:order-6 lg:inline-flex'
			variant='text'
			icon={<BsFillBookmarkPlusFill className='text-xl' />}
		>
			<span className='truncate text-sm font-extrabold -tracking-wide'>
				Watchlist
				<span className='ml-2 rounded-xl bg-brand-yellow px-[0.4rem] py-0 text-center text-xs font-normal normal-case leading-4 tracking-brand-widest text-black'>
					61
				</span>
			</span>
		</Button>
	)
}

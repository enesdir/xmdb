import { BsBookmarkPlusFill } from 'react-icons/bs'
import { Button } from '@/components/Button'

export const WatchListButton = () => {
	return (
		<Button
			className='order-5 hidden lg:order-6 lg:inline-flex'
			variant='text'
			icon={<BsBookmarkPlusFill className='text-xl' />}
		>
			<span className='truncate text-sm font-medium tracking-wide'>
				Watchlist
				<span className='ml-2 rounded-[10px] bg-yellow-500 px-[0.4rem] py-0 text-center text-xs font-normal normal-case leading-4 tracking-[0.03333em] text-black'>
					61
				</span>
			</span>
		</Button>
	)
}

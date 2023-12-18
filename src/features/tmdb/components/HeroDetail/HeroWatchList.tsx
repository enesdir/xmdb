import { FaCheck, FaPlus } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'

import { intToString } from '@/features/show/utils/intToString'
import { cn } from '@/utils/cn'

type HeroWatchListProps = {
	isAdded: boolean
	numberOfAddedUser: number
}
export const HeroWatchList = ({ isAdded = false, numberOfAddedUser }: HeroWatchListProps) => {
	return (
		<div className='max-w-[27rem]'>
			<div className='relative m-0 inline-flex h-12 w-full max-w-full cursor-pointer border-none bg-none text-sm font-medium tracking-wide text-white'>
				<button
					className={cn(
						'relative m-0 mr-0.5 flex cursor-pointer items-center overflow-hidden rounded-l border-none bg-white/[0.08] py-1.5 pl-3 pr-4 text-left text-sm font-medium tracking-wide text-white',
						'min-w-[3rem] grow'
					)}
				>
					<span className='ml-[-0.375rem] mr-1 shrink-0 text-2xl'>{isAdded ? <FaCheck /> : <FaPlus />}</span>
					<div className='grow whitespace-normal'>
						<div className='text-left leading-4'>{isAdded ? 'In ' : 'Add to '} Watchlist</div>
						<div className='text-left text-xs font-normal text-white/70'>
							Added by {intToString(numberOfAddedUser)} users
						</div>
					</div>
				</button>
				<button
					className={cn(
						'relative m-0 inline-block cursor-pointer items-center overflow-hidden rounded-r border-none bg-white/[0.08] p-4 text-left text-sm font-medium tracking-wide text-white',
						'min-w-[3rem] shrink-0'
					)}
				>
					<span className='align-middle text-2xl font-medium leading-4 -tracking-tight'>
						<IoIosArrowDown />
					</span>
				</button>
			</div>
		</div>
	)
}

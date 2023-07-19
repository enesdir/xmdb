import { AiOutlineSearch } from 'react-icons/ai'
import { IconButton } from '@/components/IconButton'

export const MobileSearch = () => {
	return (
		<IconButton
			icon={<AiOutlineSearch className='text-2xl leading-5 text-white' />}
			variant='ghost'
			label='Mobile Menu'
			className='duration-[0.3s] ease-[ease] delay-[0s] order-4 flex scale-100 p-0 opacity-100 transition-all sm:hidden'
		/>
	)
}

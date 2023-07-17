import { AiOutlineMenu } from 'react-icons/ai'
import { IconButton } from '@/components/'

export const MobileMenu = () => {
	return (
		<IconButton
			icon={<AiOutlineMenu className='text-2xl leading-5 text-white' />}
			variant='ghost'
			label='Mobile Menu'
			className='order-[0] flex sm:hidden'
		/>
	)
}

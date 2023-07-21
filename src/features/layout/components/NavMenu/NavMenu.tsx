import { AiOutlineMenu } from 'react-icons/ai'
import { Button } from '@/components/Button'
import { IconButton } from '@/components/IconButton'
import { menuItems } from '@/features/layout/constants/menuItems'
import { useBoolean } from '@/hooks/useBoolean'
import { MenuDrawer } from './Menu'

export const NavMenu = () => {
	const { value: isMenuOpen, setTrue: openMenu, setFalse: closeMenu } = useBoolean()

	return (
		<>
			<Button
				icon={<AiOutlineMenu className='text-2xl leading-5' />}
				variant='text'
				className='order-3 hidden  sm:inline-flex'
				onClick={() => {
					openMenu()
				}}
			>
				Menu
			</Button>
			<IconButton
				icon={<AiOutlineMenu className='text-2xl leading-5 text-white' />}
				variant='ghost'
				label='Mobile Menu'
				className='order-[0] flex sm:hidden'
				onClick={() => {
					openMenu()
				}}
			/>
			<MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menuItems!} />
		</>
	)
}

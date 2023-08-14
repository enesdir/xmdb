'use client'

import type { MenuItemType } from '@/features/layout/types/MenuItemType'

import { AiOutlineMenu } from 'react-icons/ai'

import { Logo } from '@/components/Brand/'
import { Button } from '@/components/Button'
import { CollapsibleMenu } from '@/components/CollapsibleMenu'
import { Drawer } from '@/components/Drawer'
import { IconButton } from '@/components/IconButton'
import { useBoolean } from '@/hooks/useBoolean'

type NavMenuProps = Readonly<{
	menuItems: MenuItemType[]
}>
export const NavMenu = ({ menuItems }: NavMenuProps) => {
	const { value: isMenuOpen, setTrue: openMenu, setFalse: closeMenu } = useBoolean()

	return (
		<>
			<Button
				icon={<AiOutlineMenu className='text-2xl leading-5' />}
				variant='text'
				className='order-3 hidden font-extrabold md:inline-flex'
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
				className='order-first flex md:hidden'
				onClick={() => {
					openMenu()
				}}
			/>
			<Drawer
				isOpen={isMenuOpen}
				onClose={closeMenu}
				openFrom='left'
				heading={<Logo className='hidden lg:block' />}
			>
				<CollapsibleMenu menu={menuItems!} onClose={closeMenu} />
			</Drawer>
		</>
	)
}

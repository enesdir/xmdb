'use client'

import { AiOutlineMenu } from 'react-icons/ai'
import { AccessControl, Button, Container } from '@/components/'
import { LanguageMenu } from '../LanguageMenu/LanguageMenu'
import { AuthButtons } from './AuthButtons/AuthButtons'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { MobileSearch } from './MobileSearch'
import { SearchBar } from './SearchBar'
import { UserMenu } from './UserMenu/UserMenu'

export const Header = () => (
	<header className='relative z-[1000] m-0 flex min-h-[3.5rem] w-full items-center border-none bg-[rgb(18,18,18)] p-1 text-base shadow-md shadow-gray-200/30'>
		<Container className='flex h-full items-center justify-between  px-0 sm:gap-x-1 '>
			<MobileMenu />
			<Logo />
			<Button
				icon={<AiOutlineMenu className='text-2xl leading-5' />}
				variant='text'
				className='order-3 hidden'
				onClick={() => alert('click')}
			>
				Menu
			</Button>
			<MobileSearch />
			<SearchBar />
			<div className='order-5'>
				<AccessControl renderNoAccess={<AuthButtons />} permissions={['isLoggedIn']}>
					<UserMenu />
				</AccessControl>
			</div>
			<LanguageMenu />
		</Container>
	</header>
)

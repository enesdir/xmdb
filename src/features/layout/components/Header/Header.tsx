'use client'

import { AiOutlineMenu } from 'react-icons/ai'
import { AccessControl, Button } from '@/components/'
import { LanguageMenu } from '../LanguageMenu/LanguageMenu'
import { AuthButtons } from './AuthButtons/AuthButtons'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { MobileSearch } from './MobileSearch'
import { SearchBar } from './SearchBar'
import { UserMenu } from './UserMenu/UserMenu'

export const Header = () => (
	<header className='relative z-[1000] mx-auto my-0 flex min-h-[3.5rem] w-full items-center gap-1 border-none p-1 px-3 py-0 text-base md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
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
	</header>
)

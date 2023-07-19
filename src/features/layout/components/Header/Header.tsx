'use client'

import { AiOutlineMenu } from 'react-icons/ai'
import { AccessControl } from '@/components/AccessControl'
import { Button } from '@/components/Button'
import { LanguageMenu } from '../LanguageMenu/LanguageMenu'
import { AuthButtons } from './AuthButtons/AuthButtons'
import { Logo } from './Logo'
import { LogoPro } from './LogoPro'
import { MobileMenu } from './MobileMenu'
import { MobileSearch } from './MobileSearch'
import { SearchBar } from './SearchBar'
import { UserMenu } from './UserMenu/UserMenu'
import { WatchListButton } from './WatchListButton'

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
		<LogoPro />
		<div className='order-5 mx-2 my-0 h-8 w-px border border-solid border-white/20 sm:order-9 sm:hidden'></div>
		<WatchListButton />
		<div className='order-6'>
			<AccessControl renderNoAccess={<AuthButtons />} permissions={['isLoggedIn']}>
				<UserMenu />
			</AccessControl>
		</div>
		<LanguageMenu />
	</header>
)

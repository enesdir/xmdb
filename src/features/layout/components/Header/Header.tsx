'use client'

import type { Session } from 'next-auth'
import { AccessControl } from '@/components/AccessControl'
import { Logo, LogoPro } from '@/components/Brand/'
import { menuItems } from '@/features/layout/constants/menuItems'
import { AuthButtons } from './AuthButtons/AuthButtons'
import { LanguageMenu } from './LanguageMenu/LanguageMenu'
import { MobileSearch } from './MobileSearch'
import { NavMenu } from './NavMenu'
import { SearchBar } from './SearchBar'
import { UserMenu } from './UserMenu/UserMenu'
import { WatchListButton } from './WatchListButton'

type HeaderProps = Readonly<{
	user?: Session['user']
}>
export const Header = ({ user }: HeaderProps) => (
	<nav className='relative z-40 m-0 flex min-h-[3.5rem] w-full items-center p-1'>
		<div className='m-0 flex w-screen items-center justify-between sm:px-3 sm:py-0 lg:mx-auto lg:my-0 lg:w-full lg:max-w-screen-lg xl:max-w-screen-xl'>
			<NavMenu menuItems={menuItems} />
			<Logo />
			<MobileSearch />
			<SearchBar />
			<LogoPro />
			<div className='order-4 mx-2 my-0 h-8 w-px border border-solid border-white/20 sm:order-6 max-wsm:hidden'></div>
			<WatchListButton />
			<div className='order-6'>
				<AccessControl renderNoAccess={<AuthButtons />} permissions={['isLoggedIn']} user={user}>
					{/* @ts-expect-error: we already check user */}
					<UserMenu user={user} />
				</AccessControl>
			</div>
			<LanguageMenu />
		</div>
	</nav>
)

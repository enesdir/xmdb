'use client'

import { AccessControl } from '@/components/AccessControl'
import { Logo, LogoPro } from '@/components/Brand/'
import { menuItems } from '@/features/layout/constants/menuItems'
import { PageContainer } from '../../../../components/Containers/PageContainer'
import { AuthButtons } from './AuthButtons/AuthButtons'
import { LanguageMenu } from './LanguageMenu/LanguageMenu'
import { MobileSearch } from './MobileSearch'
import { NavMenu } from './NavMenu'
import { SearchBar } from './SearchBar'
import { UserMenu } from './UserMenu/UserMenu'
import { WatchListButton } from './WatchListButton'

import type { Session } from 'next-auth'

type HeaderProps = Readonly<{
	user?: Session['user']
}>
export const Header = ({ user }: HeaderProps) => (
	<nav className='relative z-40 m-0 flex min-h-[3.5rem] w-full items-center px-0 py-1 text-base font-normal text-white'>
		<PageContainer center className='flex justify-between'>
			<NavMenu menuItems={menuItems} />
			<Logo />
			<MobileSearch />
			<SearchBar />
			<LogoPro />
			<div className='order-4 mx-2 my-0 h-8 w-px border border-solid border-white/20 md:order-6 md:hidden'></div>
			<WatchListButton />
			<AccessControl renderNoAccess={<AuthButtons />} permissions={['isLoggedIn']} user={user}>
				{/* @ts-expect-error: we already check user */}
				<UserMenu user={user} />
			</AccessControl>

			<LanguageMenu />
		</PageContainer>
	</nav>
)

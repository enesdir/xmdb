import { AccessControl } from '@/components/AccessControl'
import { Logo, LogoPro } from '@/components/Brand/'
import { PageContainer } from '@/components/Containers/PageContainer'
import { AuthButtons } from './AuthButtons/AuthButtons'
import { LanguageMenu } from './LanguageMenu/LanguageMenu'
import { MobileSearch } from './MobileSearch'
import { NavMenu } from './NavMenu'
import { SearchBar } from './SearchBar'
import { UserMenu } from './UserMenu/UserMenu'
import { WatchListButton } from './WatchListButton'

import type { Session } from 'next-auth'

type HeaderProps = Readonly<{
	session: Session | null
}>
export const Header = ({ session }: HeaderProps) => {
	return (
		<nav className='relative z-40 m-0 flex min-h-[3.5rem] w-full items-center px-0 py-1 text-base font-normal text-white'>
			<PageContainer center className='flex justify-between'>
				<NavMenu />
				<Logo />
				<MobileSearch />
				<SearchBar />
				<LogoPro />
				<div className='order-4 mx-2 my-0 h-8 w-px border border-solid border-white/20 md:order-6 md:hidden'></div>
				<WatchListButton />
				<AccessControl
					renderNoAccess={<AuthButtons />}
					createdID={session?.user?.id}
					actions={['read']}
					resource='app_user'
					user={session?.user}
				>
					{session?.user && <UserMenu user={session.user} />}
				</AccessControl>
				<LanguageMenu />
			</PageContainer>
		</nav>
	)
}

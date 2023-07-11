import Link from 'next/link'
import { AccessControl, Container } from '@/components/'
import { UsersSearchBar } from '@/features/users/components/UsersSearchBar/UsersSearchBar'
import { PROJECT_NAME } from '@/lib/constants'
import { AuthButtons } from './AuthButtons/AuthButtons'
import { UserMenu } from './UserMenu/UserMenu'

export const Header = () => (
	<header className='h-16 bg-[#121212] shadow-md shadow-gray-200/30'>
		<Container className='flex h-full items-center justify-between space-x-3 px-2 py-9'>
			<div className=' items-center rounded-md bg-[#f5c518]'>
				<Link href='/' className='p-1 text-xl font-extrabold text-gray-900'>
					{PROJECT_NAME}
				</Link>
			</div>
			<UsersSearchBar />

			<AccessControl renderNoAccess={<AuthButtons />} permissions={['isLoggedIn']}>
				<UserMenu />
			</AccessControl>
		</Container>
	</header>
)

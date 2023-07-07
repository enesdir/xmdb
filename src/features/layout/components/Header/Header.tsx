import Link from 'next/link'
import { Container } from '@/components/'
import { UsersSearchBar } from '@/features/users/components/UsersSearchBar/UsersSearchBar'
import { PROJECT_NAME } from '@/lib/constants'
import { ButtonList } from './ButtonList/ButtonList'
import { UserMenu } from './UserMenu/UserMenu'

export const Header = () => (
	<header className='h-16  shadow-md shadow-gray-200/30'>
		<Container className='flex h-full items-center justify-between px-2 py-9'>
			<Link href='/' className='text-xl font-bold text-red-600'>
				{PROJECT_NAME}
			</Link>
			<UsersSearchBar />
			<ButtonList />
			<UserMenu />
		</Container>
	</header>
)
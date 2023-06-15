import Link from 'next/link'
import { Container } from '@/components/ui/Container/Container'
import { PROJECT_NAME } from '@/lib/constants'
import { ButtonList } from './ButtonList/ButtonList'
import { UserMenu } from './UserMenu/UserMenu'

export const Header = () => (
	<header className='h-16 px-3.5 shadow-md shadow-gray-200/30'>
		<Container className='flex h-full items-center justify-between'>
			<Link href='/' className='text-xl font-bold text-red-600'>
				{PROJECT_NAME}
			</Link>
			<ButtonList />
			<UserMenu />
		</Container>
	</header>
)

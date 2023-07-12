'use client'

import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { AccessControl, Button, Container } from '@/components/'
import { PROJECT_NAME } from '@/lib/constants'
import { AuthButtons } from './AuthButtons/AuthButtons'
import { SearchBar } from './SearchBar'
import { UserMenu } from './UserMenu/UserMenu'

export const Header = () => (
	<header className='h-16 bg-[#121212] shadow-md shadow-gray-200/30'>
		<Container className='flex h-full items-center justify-between gap-x-1'>
			<div className='order-1 items-center rounded-md bg-[#f5c518]'>
				<Link href='/' className='p-1 text-2xl font-extrabold text-gray-900'>
					{PROJECT_NAME}
				</Link>
			</div>
			<Button
				icon={<AiOutlineMenu className='text-2xl leading-5' />}
				variant='text'
				className='order-2'
				onClick={() => alert('click')}
			>
				Menu
			</Button>
			<SearchBar />
			<div className='order-4'>
				<AccessControl renderNoAccess={<AuthButtons />} permissions={['isLoggedIn']}>
					<UserMenu />
				</AccessControl>
			</div>
		</Container>
	</header>
)

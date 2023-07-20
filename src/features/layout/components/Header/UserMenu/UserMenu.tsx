'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Session } from 'next-auth'
import { BiHelpCircle, BiLogOut, BiSlider } from 'react-icons/bi'
import { DropdownItem, DropdownItems } from '@/components/Dropdown'
import { DropdownButton } from '@/components/Dropdown/DropdownButton'
import { IconButton } from '@/components/IconButton'
import { UserAvatar } from '@/components/UserAvatar'
import { useBoolean } from '@/hooks/useBoolean'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { signOutUser } from '@/lib/auth'
import { getFirstLetter } from '@/lib/utils/stringOperations'

type UserMenuProps = Readonly<{
	user: Session['user']
}>
export const UserMenu = ({ user }: UserMenuProps) => {
	const { value, toggle, setFalse } = useBoolean()
	const dropdownRef = useRef<HTMLDivElement>(null)
	const handleClickOutside = () => {
		setFalse()
	}
	useOnClickOutside(dropdownRef, handleClickOutside)

	// if (!data) return <p>loading</p>
	return (
		<div className='order-4 flex justify-center'>
			<div className='relative flex h-full' ref={dropdownRef}>
				<IconButton
					icon={<UserAvatar user={user} size='2xs' icon={true} />}
					onClick={() => {
						toggle()
					}}
					variant='rounded'
					className='sm:hidden'
					label='User Menu'
				/>
				<DropdownButton
					onClick={() => {
						toggle()
					}}
					isOpen={value}
					className='hidden items-center rounded-md border border-transparent bg-transparent text-sm sm:flex'
				>
					<UserAvatar user={user} size='2xs' icon={true} />
					<span>{user.name ? getFirstLetter(user.name) : '?'}</span>
				</DropdownButton>

				<DropdownItems className='right-0 mt-10' isHidden={!value} size='xl'>
					<Link
						href='#'
						className='-mt-2 flex w-full items-center p-3 text-sm text-gray-300 transition-colors duration-200 hover:bg-white/5 hover:text-white active:bg-white/30'
					>
						<UserAvatar user={user} size='sm' icon={true} />
						<div className='mx-1'>
							<h1 className='text-sm font-semibold text-gray-200'>{user.name}</h1>
							<span className='text-sm text-white/30'>{user.email}</span>
						</div>
					</Link>
					<DropdownItem href={`/${user.username}`} icon={<BiLogOut />}>
						View Profile
					</DropdownItem>
					<DropdownItem href='#' icon={<BiSlider />}>
						Settings
					</DropdownItem>
					<hr className='border-gray-700' />
					<DropdownItem href='#' icon={<BiHelpCircle />}>
						Help
					</DropdownItem>
					<DropdownItem icon={<BiLogOut />} onClick={signOutUser}>
						Sign Out
					</DropdownItem>
				</DropdownItems>
			</div>
		</div>
	)
}

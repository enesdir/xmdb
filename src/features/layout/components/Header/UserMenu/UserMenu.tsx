'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { BiHelpCircle, BiLogOut, BiSlider } from 'react-icons/bi'
import { UserAvatar } from '@/components'
import { DropdownItem, DropdownItems } from '@/components/Dropdown'
import { useBoolean } from '@/hooks/useBoolean'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { signOutUser } from '@/lib/auth'
import { getFirstLetter } from '@/lib/utils/stringOperations'
import { DropdownButton } from '../../../../../components/Dropdown/DropdownButton'

export const UserMenu = () => {
	const {
		// @ts-expect-error: we already checked user loggedin and render this component
		data: { user },
	} = useSession()

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
				<DropdownButton
					onClick={() => {
						toggle()
					}}
					isOpen={value}
					className='flex items-center rounded-md border border-transparent bg-transparent text-sm'
				>
					<UserAvatar user={user} size='2xs' icon={true} />
					<span>{user.name ? getFirstLetter(user.name) : '?'}</span>
				</DropdownButton>

				<DropdownItems className='right-0 mt-10' isHidden={!value} size='xl'>
					<Link
						href='#'
						className='-mt-2 flex items-center p-3 text-sm  text-gray-300 transition-colors  duration-200 hover:bg-white/5 hover:text-white active:bg-white/30'
					>
						<UserAvatar user={user} size='sm' icon={true} />
						<div className='mx-1'>
							<h1 className='text-sm font-semibold text-gray-200'>{user.name}</h1>
							<p className='text-sm text-gray-400'>{user.email}</p>
						</div>
					</Link>
					<hr className='border-gray-700' />
					<DropdownItem href={`/${user.username}`} icon={<BiLogOut />}>
						view profile
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

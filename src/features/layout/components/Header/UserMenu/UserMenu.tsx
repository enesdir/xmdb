'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { BiHelpCircle, BiLogOut, BiSlider } from 'react-icons/bi'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { Button, UserAvatar } from '@/components'
import { useBoolean } from '@/hooks/useBoolean'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { signOutUser } from '@/lib/auth'
import { cn } from '@/lib/utils/cn'
import { getFirstLetter } from '@/lib/utils/stringOperations'
import { DropdownItem } from './MenuItem'

export const UserMenu = () => {
	const { data } = useSession()

	const { value, toggle } = useBoolean()
	const dropdownRef = useRef<HTMLDivElement>(null)

	useOnClickOutside(dropdownRef, () => {
		if (value) toggle()
	})

	// if (!data) return <p>loading</p>
	return (
		<div className='order-4 flex justify-center'>
			<div className='relative inline-block' ref={dropdownRef}>
				<Button
					variant='text'
					onClick={() => {
						toggle()
					}}
					className='relative flex items-center rounded-md border border-transparent bg-transparent text-sm text-white'
				>
					<UserAvatar user={data.user} size='2xs' />
					<span>{data.user.name ? getFirstLetter(data.user.name) : '?'}</span>
					{value ? <FaCaretUp /> : <FaCaretDown />}
				</Button>

				<div
					className={cn(
						'absolute right-0 z-20 mt-3 w-56 overflow-hidden rounded-md bg-[#1f1f1f] py-2 shadow-xl',
						!value && 'hidden'
					)}
				>
					<Link
						href='#'
						className='-mt-2 flex items-center p-3 text-sm  text-gray-300 transition-colors  duration-200 hover:bg-white/5 hover:text-white active:bg-white/30'
					>
						<UserAvatar user={data.user} size='sm' />
						<div className='mx-1'>
							<h1 className='text-sm font-semibold text-gray-200'>{data.user.name}</h1>
							<p className='text-sm text-gray-400'>{data.user.email}</p>
						</div>
					</Link>
					<hr className='border-gray-700' />
					<DropdownItem href={`/${data.user.username}`} icon={<BiLogOut />}>
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
				</div>
			</div>
		</div>
	)
}

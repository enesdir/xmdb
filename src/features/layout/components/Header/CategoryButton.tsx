'use client'

import { useRef } from 'react'
import { IoPeople } from 'react-icons/io5'
import { MdLocalMovies } from 'react-icons/md'
import { SiThemoviedatabase } from 'react-icons/si'
import { useSearchBarCategory } from '~/src/providers/SearchBarProvider'
import { useBoolean } from '@/hooks/useBoolean'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { cn } from '@/lib/utils/cn'
import { DropdownItem } from './UserMenu/MenuItem'

export const CategoryButton = () => {
	const { categoryValue, setCategoryValue } = useSearchBarCategory()
	const { value, toggle, setFalse } = useBoolean()
	const dropdownRef = useRef<HTMLDivElement>(null)

	useOnClickOutside(dropdownRef, () => {
		if (value) toggle()
	})

	return (
		<div className='flex h-full' ref={dropdownRef}>
			<button
				className='inline-flex w-20 items-center justify-center rounded-l-lg border-r border-gray-200'
				type='button'
				onClick={() => {
					toggle()
				}}
			>
				<span className='origin-center truncate align-baseline font-semibold transition'>
					{categoryValue}
				</span>
			</button>
			<div
				className={cn(
					'absolute left-0 z-20 mt-10 w-32 overflow-hidden rounded-md bg-[#1f1f1f] py-2 shadow-xl',
					!value && 'hidden'
				)}
			>
				<DropdownItem
					icon={<MdLocalMovies className='text-2xl' />}
					onClick={() => {
						setCategoryValue('Shows')
						setFalse()
					}}
				>
					<span className='text-lg'>Shows</span>
				</DropdownItem>
				<DropdownItem
					icon={<IoPeople className='text-2xl' />}
					onClick={() => {
						setCategoryValue('Users')
						setFalse()
					}}
				>
					<span className='text-lg'>Users</span>
				</DropdownItem>
				<hr className='border-gray-700' />
				<DropdownItem
					icon={<SiThemoviedatabase className='text-2xl' />}
					onClick={() => {
						setCategoryValue('Tmdb')
						setFalse()
					}}
				>
					<span className='text-lg'>Tmdb</span>
				</DropdownItem>
			</div>
		</div>
	)
}

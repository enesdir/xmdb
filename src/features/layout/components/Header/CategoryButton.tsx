'use client'

import { useRef } from 'react'
import { IoPeople } from 'react-icons/io5'
import { MdLocalMovies } from 'react-icons/md'
import { SiThemoviedatabase } from 'react-icons/si'
import { DropdownItem, DropdownItems } from '@/components/Dropdown'
import { useBoolean } from '@/hooks/useBoolean'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { useSearchBarCategory } from '@/providers/SearchBarProvider'

export const CategoryButton = () => {
	const { categoryValue, setCategoryValue } = useSearchBarCategory()
	const { value, toggle, setFalse } = useBoolean()
	const dropdownRef = useRef<HTMLDivElement>(null)
	const handleClickOutside = () => {
		setFalse()
	}
	useOnClickOutside(dropdownRef, handleClickOutside)

	return (
		<div className='relative flex h-full' ref={dropdownRef}>
			<button
				className='inline-flex w-fit items-center justify-center rounded-l-lg border-r border-gray-200 px-1'
				type='button'
				onClick={() => {
					toggle()
				}}
			>
				<span className='origin-center truncate align-baseline font-semibold transition'>
					{categoryValue}
				</span>
			</button>
			<DropdownItems className='left-0 mt-10' isHidden={!value} size='lg'>
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
			</DropdownItems>
		</div>
	)
}

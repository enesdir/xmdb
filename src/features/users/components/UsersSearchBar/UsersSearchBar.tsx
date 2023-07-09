'use client'

import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Spinner, TextField } from '@/components/'
import { useSearchUsers } from '@/features/users/hooks/useSearchUsers'
import { useDebounce } from '@/hooks/useDebounce'
import { UsersSearchBarList } from './UsersSearchBarList/UsersSearchBarList'

export const UsersSearchBar = () => {
	const [value, setValue] = useState('')
	const searchValue = useDebounce(value, 300)
	const { users, isLoading } = useSearchUsers(searchValue)

	return (
		<div className='relative flex-1'>
			<TextField
				type='text'
				placeholder='Enter username'
				autoComplete={false}
				spellCheck={false}
				leftIcon={<AiOutlineSearch />}
				icon={<AiOutlineSearch />}
				value={value}
				onChange={({ target }) => setValue(target.value)}
			/>
			{value.length > 0 && (
				<div className='absolute top-full w-full rounded-md border border-t-0 bg-white shadow-sm'>
					{isLoading ? (
						<Spinner center />
					) : (
						<UsersSearchBarList users={users} onItemClick={() => setValue('')} />
					)}
				</div>
			)}
		</div>
	)
}

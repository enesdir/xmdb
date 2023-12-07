'use client'

import { useRef, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import { Spinner } from '@/components/Spinner'
import { TextField } from '@/components/TextField'
import { useSearchUsers } from '@/features/users/hooks/useSearchUsers'
import { useBoolean } from '@/hooks/useBoolean'
import { useDebounce } from '@/hooks/useDebounce'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { cn } from '@/utils/cn'
import { UsersSearchBarList } from './UsersSearchBarList/UsersSearchBarList'

export const UsersSearchBar = () => {
	const [value, setValue] = useState<string>('')
	const searchValue = useDebounce(value, 300)
	const { value: isHideList, toggle, setFalse } = useBoolean()
	const { users, isPending } = useSearchUsers(searchValue)
	const dropdownRef = useRef<HTMLDivElement>(null)

	useOnClickOutside(dropdownRef, () => {
		if (!isHideList) toggle()
	})
	return (
		<div className='relative flex grow' ref={dropdownRef}>
			<TextField
				type='text'
				placeholder='Enter username'
				spellCheck={false}
				icon={<AiOutlineSearch />}
				value={value}
				onFocus={() => setFalse()}
				onChange={({ target }) => setValue(target.value)}
			/>
			{value.length > 0 && (
				<div
					className={cn(
						'absolute top-full mt-2 w-full rounded-md border-none bg-[#1f1f1f] shadow-sm',
						isHideList && 'hidden'
					)}
				>
					{isPending ? (
						<Spinner center />
					) : (
						<UsersSearchBarList users={users} onItemClick={() => setValue('')} />
					)}
				</div>
			)}
		</div>
	)
}

'use client'

import { useRef, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Spinner } from '@/components/Spinner'
import { TextField } from '@/components/TextField'
import { UsersSearchBarList } from '@/features/users/components/UsersSearchBar/UsersSearchBarList/UsersSearchBarList'
import { useSearchUsers } from '@/features/users/hooks/useSearchUsers'
import { useBoolean } from '@/hooks/useBoolean'
import { useDebounce } from '@/hooks/useDebounce'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { cn } from '@/lib/utils/cn'

export const UserSearch = () => {
	const [value, setValue] = useState<string>('')
	const searchValue = useDebounce(value, 300)
	const { value: isHideList, toggle, setFalse } = useBoolean(true)
	const { users, isLoading } = useSearchUsers(searchValue)
	const dropdownRef = useRef<HTMLDivElement>(null)

	useOnClickOutside(dropdownRef, () => {
		if (!isHideList) toggle()
	})
	return (
		<div className='w-full' ref={dropdownRef}>
			<div
				// eslint-disable-next-line jsx-a11y/role-has-required-aria-props
				role='combobox'
				aria-haspopup='listbox'
				aria-owns='navSuggestionSearch'
				aria-expanded={!isHideList}
				className=''
			>
				<TextField
					type='text'
					placeholder='Search Username'
					spellCheck={false}
					icon={<AiOutlineSearch />}
					value={value}
					onFocus={() => setFalse()}
					onChange={({ target }) => setValue(target.value)}
					className='rounded-none rounded-r-lg border-none outline-none'
				/>
				<div
					id='navSuggestionSearch'
					role='listbox'
					className={cn(
						'absolute left-0 top-full mt-2 w-full rounded-md border-none bg-[#1f1f1f] shadow-sm',
						isHideList && 'hidden'
					)}
				>
					{isLoading ? (
						<Spinner center />
					) : (
						<UsersSearchBarList users={users} onItemClick={() => setValue('')} />
					)}
				</div>
			</div>
		</div>
	)
}

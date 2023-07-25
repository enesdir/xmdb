'use client'

import { useSearchBarCategory } from '@/providers/SearchBarProvider'
import { CategoryButton } from './CategoryButton'
import { UserSearch } from './UserSearch'
import { UserShowSearch } from './UserShowSearch'

const searchComponents = {
	Shows: UserShowSearch,
	Users: UserSearch,
	// TODO: tmdb api imp
	Tmdb: () => <p>e</p>,
}
export const SearchBar = () => {
	const { categoryValue } = useSearchBarCategory()

	const SearchComponent = searchComponents[categoryValue]
	return (
		<div
			id='suggestion-search-container'
			className='pointer-events-none invisible flex min-h-[2.25rem] w-full grow md:pointer-events-auto md:relative md:order-3 md:grow md:translate-y-0 md:px-2'
		>
			<form
				id='nav-search-form'
				name='nav-search-form'
				className='pointer-events-none invisible hidden grow items-center rounded bg-white transition-[border,background-color,box-shadow] md:pointer-events-auto md:visible md:flex'
				role='search'
			>
				<CategoryButton />
				{categoryValue && SearchComponent && (
					<div key={categoryValue} className='w-full'>
						<SearchComponent />
					</div>
				)}
			</form>
		</div>
	)
}

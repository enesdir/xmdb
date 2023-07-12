'use client'

import { PropsWithChildren, useMemo, useState } from 'react'
import type { SearchCatogeries } from '@/features/layout/types/SearchBar'
import { createCtx } from '@/lib/createCtx'

export type SearchBarContextData = {
	/** Search Bar Category Value */
	categoryValue: SearchCatogeries
	/** Do switch categories */
	setCategoryValue: (x: SearchCatogeries) => void
}

const [useCtx, Provider] = createCtx<SearchBarContextData>()

function SearchBarProvider({ children }: PropsWithChildren) {
	const [categoryValue, setCategoryValue] = useState<SearchCatogeries>('Shows')

	const contextValue = useMemo(() => ({ categoryValue, setCategoryValue }), [categoryValue])

	return <Provider value={contextValue}>{children}</Provider>
}

export { SearchBarProvider, useCtx as useSearchBarCategory }

import type { CategoryItemType } from '@/features/layout/types/MenuItemType'

import React from 'react'
import Link from 'next/link'

import { cn } from '@/utils/cn'

type CollapsibleContentProps = Readonly<{
	items: CategoryItemType[]
	parentIndex?: number
	onClose: () => void
}>
/**
 * Renders the menu items.
 *
 * @param {CategoryItemType[]} items The menu items.
 * @param {number} parentIndex The parent index of the menu items.
 * @returns {React.Element} The rendered menu items.
 */
// eslint-disable-next-line
export const CollapsibleContent = ({ items, parentIndex, onClose }: CollapsibleContentProps) => {
	return (
		<div>
			{items.map((item, index) => (
				<div className='h-auto py-2 pl-14 hover:bg-white/20 lg:!h-auto lg:border-none lg:bg-none' key={index}>
					{/* Render the menu item */}
					<Link className={cn('w-full cursor-pointer text-white')} href={item.href} onClick={onClose}>
						<span className='block grow truncate text-white/100'>{item.title}</span>
					</Link>
				</div>
			))}
		</div>
	)
}

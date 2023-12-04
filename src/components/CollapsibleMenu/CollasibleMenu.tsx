'use client'

import { useCallback, useState } from 'react'

import { cn } from '@/utils/cn'
import { CollapsibleButton } from './CollapsibleButton'
import { CollapsibleContent } from './CollapsibleContent'

import type { MenuItemType } from '@/features/layout/types/MenuItemType'

export type CollapsibleMenuProps = Readonly<{ menu: MenuItemType[]; onClose: () => void }>
/**
 * The `CollapsibleMenu` component renders a collapsible menu.
 *
 * @param {MenuItemType[]} menuItems The menu items.
 * @returns {React.Element} The collapsible menu.
 */
export const CollapsibleMenu = ({ menu, onClose }: CollapsibleMenuProps) => {
	/** The current open menu item index. */
	const [openIndex, setOpenIndex] = useState<number | null>(null)
	/**
	 * Handles a click on a menu item.
	 *
	 * @param {number} index The index of the menu item that was clicked.
	 */
	const handleClick = useCallback(
		(index: number) => {
			if (openIndex === index) {
				setOpenIndex(null) // Close the menu item if already open
			} else {
				setOpenIndex(index) // Open the clicked menu item
			}
		},
		[openIndex]
	)

	return (
		<>
			{menu.map((menuItem, index) => (
				<div className='lg:max-w-[33%] lg:basis-[33%]' key={index}>
					{/* Render the menu category */}
					<CollapsibleButton
						icon={<menuItem.icon />}
						isOpen={openIndex === index}
						onClick={() => handleClick(index)}
						title={menuItem.title}
					/>
					{/* Render menu items under the category */}
					{menuItem.items && menuItem.items.length > 0 && (
						<ul
							className={cn(
								'm-0 w-full p-0 text-base font-normal normal-case leading-6 tracking-brand-wide lg:block',
								{ hidden: openIndex !== index }
							)}
						>
							<CollapsibleContent items={menuItem.items} parentIndex={index} onClose={onClose} />
						</ul>
					)}
				</div>
			))}
		</>
	)
}

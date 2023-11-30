import { ComponentType } from 'react'

import type { IconBaseProps } from 'react-icons'

export type CategoryItemType = {
	href: string
	title: string
	isExternal?: boolean
}

export type MenuItemType = {
	href: string
	title: string
	icon: ComponentType<IconBaseProps>
	isExternal?: boolean
	items: CategoryItemType[]
}

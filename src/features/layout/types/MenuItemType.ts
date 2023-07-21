import type { IconType } from 'react-icons'

export type CategoryItemType = {
	href: string
	title: string
	isExternal?: boolean
}

export type MenuItemType = {
	href: string
	title: string
	icon: IconType
	isExternal?: boolean
	items: CategoryItemType[]
}

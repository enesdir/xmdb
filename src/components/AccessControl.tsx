'use client'

import type { ReactNode } from 'react'
import { useSession } from 'next-auth/react'

type AccessControlProps = Readonly<{
	children: ReactNode
	renderNoAccess?: () => ReactNode
	accessCheck?: boolean
	createdID: string | null
}>

export const AccessControl = ({ children, renderNoAccess, accessCheck, createdID }: AccessControlProps) => {
	const { data } = useSession()
	const isOwner = data?.user?.id === createdID
	const hasAccess = isOwner || accessCheck
	if (hasAccess) {
		return children
	}
	if (renderNoAccess) {
		return renderNoAccess()
	}
	return null
}

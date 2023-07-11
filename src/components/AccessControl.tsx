'use client'

import type { ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import { Spinner } from './Spinner/Spinner'

type AccessControlPermissions = 'isLoggedIn' | 'isOwner' | 'isAdmin'

type AccessControlProps = Readonly<{
	children: ReactNode
	renderNoAccess?: ReactNode
	accessCheck?: boolean
	createdID?: string
	permissions: AccessControlPermissions[]
}>

export const AccessControl = ({
	children,
	renderNoAccess = null,
	accessCheck = false,
	createdID,
	permissions = ['isLoggedIn'],
}: AccessControlProps) => {
	const { data, status } = useSession()
	if (status === 'loading') return <Spinner />
	const isOwner = createdID && data?.user?.id === createdID
	const isLoggedIn = Boolean(status === 'authenticated')
	// TODO: Add your logic to determine if the user is an admin
	const isAdmin = false

	// Helper function to check if a specific permission is included in the permissions array
	const hasPermission = (permission: AccessControlPermissions) => permissions.includes(permission)
	const hasAccess =
		(hasPermission('isLoggedIn') && isLoggedIn) ||
		(hasPermission('isOwner') && isOwner) ||
		(hasPermission('isAdmin') && isAdmin) ||
		accessCheck

	if (hasAccess) {
		return children
	}

	if (renderNoAccess) {
		return renderNoAccess
	}

	return null
}

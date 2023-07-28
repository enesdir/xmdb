import type { Session } from 'next-auth'
import type { ReactNode } from 'react'

type AccessControlPermissions = 'isLoggedIn' | 'isOwner' | 'isAdmin'

type AccessControlProps = Readonly<{
	children: ReactNode
	renderNoAccess?: ReactNode
	accessCheck?: boolean
	createdID?: string
	permissions: AccessControlPermissions[]
	user?: Session['user']
}>
const checkLoggedIn = (user?: Session['user']): boolean => {
	return Boolean(user && user.id)
}
export const AccessControl = ({
	children,
	renderNoAccess = null,
	accessCheck = false,
	createdID,
	permissions = ['isLoggedIn'],
	user,
}: AccessControlProps) => {
	const isOwner = createdID && user?.id === createdID
	const isLoggedIn = checkLoggedIn(user)
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

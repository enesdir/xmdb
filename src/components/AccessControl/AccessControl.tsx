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

// Helper function to check if a specific permission is included in the permissions array
const hasPermission = (
	permissions: AccessControlPermissions[],
	permission: AccessControlPermissions
): boolean => {
	return permissions.includes(permission)
}
export const AccessControl = ({
	children,
	renderNoAccess = null,
	accessCheck = false,
	createdID,
	permissions = ['isLoggedIn'],
	user,
}: AccessControlProps): ReactNode => {
	const isOwner = createdID && user?.id === createdID
	const isLoggedIn = Boolean(user && user.id)
	// TODO: Add your logic to determine if the user is an admin
	const isAdmin = false

	const hasAccess =
		(hasPermission(permissions, 'isLoggedIn') && isLoggedIn) ||
		(hasPermission(permissions, 'isOwner') && isOwner) ||
		(hasPermission(permissions, 'isAdmin') && isAdmin) ||
		accessCheck

	if (hasAccess) {
		return <>{children}</>
	}

	if (renderNoAccess) {
		return <>{renderNoAccess}</>
	}
	return null
}

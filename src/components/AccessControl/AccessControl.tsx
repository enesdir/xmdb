import { Role } from '@/constants/roles'
import { useHasAccess } from '@/hooks/useHasAccess'

import type { Action, Resource } from '@/types/Permissions'
import type { Session } from 'next-auth'
import type { ReactNode } from 'react'

type AccessControlProps = Readonly<{
	children: ReactNode
	renderNoAccess?: ReactNode
	accessCheck?: boolean
	createdID?: string
	resource: Resource
	actions: Action[]
	user?: Session['user']
}>
function getUserRole(user?: Session['user'], createdID?: string): Role {
	if (!user) {
		return Role.USER
	}
	if (user?.role === 'ADMIN') {
		return Role.ADMIN
	}
	if (user?.id === createdID!) {
		return Role.MEMBER
	}
	return Role.USER
}
export const AccessControl = ({
	children,
	resource,
	actions,
	user,
	createdID,
	renderNoAccess,
}: AccessControlProps) => {
	const { hasAccess } = useHasAccess()
	const role = getUserRole(user, createdID)

	if (hasAccess(role, resource, actions)) {
		return <>{children}</>
	}

	if (renderNoAccess) {
		return <>{renderNoAccess}</>
	}
	return null
}

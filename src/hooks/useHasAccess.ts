import { permissions } from '@/constants/permissions'

import type { Action, Resource, RoleType } from '@/types/Permissions'

export const useHasAccess = () => {
	const hasAccess = (role: RoleType, resource: Resource, actions: Action[]) => {
		return (permissions[role] || []).some(
			(permission) =>
				permission.resource === resource &&
				(permission.actions === '*' || permission.actions.some((action) => actions.includes(action)))
		)
	}

	return {
		hasAccess,
	}
}

import { Role } from '@/constants/roles'

export type RoleType = (typeof Role)[keyof typeof Role]
export type Action = 'create' | 'update' | 'read' | 'delete'
export type Resource = 'app' | 'app_post' | 'app_follow' | 'app_like' | 'app_user'

export type RolePermissions = {
	[role in RoleType]: Permission[]
}

export type Permission = {
	resource: Resource
	actions: Action[] | '*'
}

export const availableRoles = [
	{
		id: Role.MEMBER,
		name: 'Member',
	},
	{
		id: Role.ADMIN,
		name: 'Admin',
	},
	{
		id: Role.USER,
		name: 'User',
	},
]

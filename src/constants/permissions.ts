import type { RolePermissions } from '@/types/Permissions'

export const permissions: RolePermissions = {
	MEMBER: [
		{
			resource: 'app',
			actions: '*',
		},
		{
			resource: 'app_user',
			actions: '*',
		},
		{
			resource: 'app_follow',
			actions: '*',
		},
		{
			resource: 'app_post',
			actions: '*',
		},
	],
	ADMIN: [
		{
			resource: 'app',
			actions: '*',
		},
		{
			resource: 'app_user',
			actions: '*',
		},
		{
			resource: 'app_post',
			actions: '*',
		},
		{
			resource: 'app_follow',
			actions: '*',
		},
	],
	USER: [
		{
			resource: 'app',
			actions: ['read'],
		},
	],
}

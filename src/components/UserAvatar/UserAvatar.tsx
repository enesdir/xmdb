import type { ComponentProps } from 'react'
import { Avatar } from '@/components/'
import { getFirstLetter } from '@/lib/utils/stringOperations'

const sizes = {
	'2xs': 'h-6 w-6',
	xs: 'h-8 w-8',
	sm: 'h-11 w-11',
	md: 'h-16 w-16',
	lg: 'h-28 w-28',
	xl: 'h-36 w-36',
} as const
type UserAvatarProps = Readonly<{
	user: {
		name?: string | null
		image?: string | null
	}
}> &
	Omit<ComponentProps<typeof Avatar>, 'src' | 'alt' | 'children'>

export const UserAvatar = ({ user: { name, image }, icon, ...props }: UserAvatarProps) => {
	if (image) {
		return <Avatar src={image} alt={name || 'User avatar'} {...props} />
	}
	if (icon) {
		return <Avatar icon={icon} {...props} />
	}
	return <Avatar {...props}>{name ? getFirstLetter(name) : '?'}</Avatar>
}

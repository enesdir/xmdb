import { Avatar } from '@/components/Avatar'
import { getFirstLetter } from '@/utils/stringOperations'

import type { ComponentProps } from 'react'

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

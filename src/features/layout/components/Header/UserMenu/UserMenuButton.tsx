import type { Session } from 'next-auth'
import { BiDownArrowAlt } from 'react-icons/bi'
import { Dropdown, UserAvatar } from '@/components/'
import { getFirstLetter } from '@/lib/utils/stringOperations'

type UserMenuButtonProps = Readonly<{
	user: Session['user']
}>

export const UserMenuButton = ({ user }: UserMenuButtonProps) => (
	<Dropdown.Button className='inline-flex w-full items-center justify-between rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-[#2b2b2b]'>
		<UserAvatar user={user} size='2xs' />
		{user.name ? getFirstLetter(user.name) : '?'}
		<BiDownArrowAlt className='-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100' aria-hidden='true' />
	</Dropdown.Button>
)

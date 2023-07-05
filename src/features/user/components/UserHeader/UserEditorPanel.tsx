'use client'

import type { ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import { AiOutlineEdit } from 'react-icons/ai'
import { UpdateUserModal } from '@/features/user/components/UpdateUserModal/UpdateUserModal'
import { useBoolean } from '@/hooks/useBoolean'
import type { User } from '@/server/modules/users/usersSchemas'

type UserEditorPanelProps = Readonly<{
	user: User
	children: ReactNode
}>

export const UserEditorPanel = ({ user, children }: UserEditorPanelProps) => {
	const { data } = useSession()
	const { value, setTrue, setFalse } = useBoolean(false)

	if (data?.user.id !== user.id) {
		return <>{children}</>
	}

	return (
		<>
			<div onClick={setTrue} className='group relative h-fit w-fit'>
				{children}
				<button
					type='button'
					className='absolute left-0 top-0 z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/60 text-3xl text-white opacity-0 transition-opacity group-hover:opacity-100'
				>
					<AiOutlineEdit />
				</button>
			</div>
			<UpdateUserModal user={user} isOpen={value} onClose={setFalse} />
		</>
	)
}

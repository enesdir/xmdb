'use client'

import { useSession } from 'next-auth/react'
import { IoAdd } from 'react-icons/io5'
import { useModal } from '@/hooks/useModal'
import type { User } from '@/server/modules/users/usersSchemas'
import { CreatePostModal } from './CreatePostModal/CreatePostModal'

type CreatePostButtonProps = Readonly<{
	user: User
}>

export const CreatePostButton = ({ user }: CreatePostButtonProps) => {
	const { data } = useSession()
	const { isOpen, openModal, closeModal } = useModal()

	if (data?.user.id !== user.id) {
		return null
	}

	return (
		<>
			<button
				type='button'
				onClick={openModal}
				aria-label='Create a new post'
				className='rounded-md bg-blue-400 p-2 text-lg text-white opacity-40 transition-opacity hover:opacity-100'
			>
				<span className='flex items-center gap-x-2'>
					<IoAdd /> Add New Show
				</span>
			</button>
			<CreatePostModal isOpen={isOpen} onClose={closeModal} />
		</>
	)
}

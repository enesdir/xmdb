'use client'

import { IoAdd } from 'react-icons/io5'
import { useModal } from '@/hooks/useModal'
import type { User } from '@/server/modules/users/usersSchemas'
import { Button } from '../ui/Button/Button'
import { CreatePostModal } from './CreatePostModal/CreatePostModal'

type CreatePostButtonProps = Readonly<{
	user: User
}>

export const CreatePostButton = ({ user }: CreatePostButtonProps) => {
	const { isOpen, openModal, closeModal } = useModal()

	return (
		<>
			<Button
				type='button'
				variant='primary'
				onClick={openModal}
				icon={<IoAdd />}
				aria-label='Create a new post'
			>
				Add New Show
			</Button>
			<CreatePostModal isOpen={isOpen} onClose={closeModal} />
		</>
	)
}

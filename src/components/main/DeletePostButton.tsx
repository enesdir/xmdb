'use client'

import { useSession } from 'next-auth/react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useModal } from '@/hooks/useModal'
import type { Post } from '@/server/modules/posts/postsSchemas'
import { Button } from '../ui/Button/Button'
import { DeletePostModal } from './DeletePostModal/DeletePostModal'

type DeletePostButtonProps = Readonly<{
	post: Post
}>

export const DeletePostButton = ({ post }: DeletePostButtonProps) => {
	const { data } = useSession()
	const { isOpen, openModal, closeModal } = useModal()

	if (data?.user.id !== post.author.id) {
		return null
	}

	return (
		<>
			<Button
				type='button'
				variant='danger'
				onClick={openModal}
				aria-label='Create a new post'
				icon={<AiOutlineDelete />}
			>
				Delete Show
			</Button>
			<DeletePostModal isOpen={isOpen} onClose={closeModal} />
		</>
	)
}

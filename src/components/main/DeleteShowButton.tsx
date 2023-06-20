'use client'

import { useSession } from 'next-auth/react'
import { AiOutlineDelete } from 'react-icons/ai'
import { Button } from '@/components/ui/Button/Button'
import { useModal } from '@/hooks/useModal'
import type { Show } from '@/server/modules/shows/showsSchemas'
import { DeleteShowModal } from './DeleteShowModal/DeleteShowModal'

type DeleteShowButtonProps = Readonly<{
	show: Show
}>

export const DeleteShowButton = ({ show }: DeleteShowButtonProps) => {
	const { data } = useSession()
	const { isOpen, openModal, closeModal } = useModal()

	if (data?.user.id !== show.author.id) {
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
			<DeleteShowModal isOpen={isOpen} onClose={closeModal} />
		</>
	)
}

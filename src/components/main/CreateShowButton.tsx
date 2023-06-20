'use client'

import { IoAdd } from 'react-icons/io5'
import { Button } from '@/components/ui/Button/Button'
import { useModal } from '@/hooks/useModal'
import type { User } from '@/server/modules/users/usersSchemas'
import { CreateShowModal } from './CreateShowModal/CreateShowModal'

type CreateShowButtonProps = Readonly<{
	user: User
}>

export const CreateShowButton = ({ user }: CreateShowButtonProps) => {
	const { isOpen, openModal, closeModal } = useModal()

	return (
		<>
			<Button
				type='button'
				variant='primary'
				onClick={openModal}
				icon={<IoAdd />}
				aria-label='Create a new show'
			>
				Add New Show
			</Button>
			<CreateShowModal isOpen={isOpen} onClose={closeModal} />
		</>
	)
}

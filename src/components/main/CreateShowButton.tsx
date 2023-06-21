'use client'

import { IoAdd } from 'react-icons/io5'
import { Button } from '@/components/ui/Button/Button'
import type { User } from '@/server/modules/users/usersSchemas'
import { useBoolean } from '../../hooks/useBoolean'
import { CreateShowModal } from './CreateShowModal/CreateShowModal'

type CreateShowButtonProps = Readonly<{
	user: User
}>

export const CreateShowButton = ({ user }: CreateShowButtonProps) => {
	const { value, setTrue, setFalse } = useBoolean()

	return (
		<>
			<Button
				type='button'
				variant='primary'
				onClick={setTrue}
				icon={<IoAdd />}
				aria-label='Create a new show'
			>
				Add New Show
			</Button>
			<CreateShowModal isOpen={value} onClose={setFalse} />
		</>
	)
}

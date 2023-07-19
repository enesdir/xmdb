'use client'

import { IoAdd } from 'react-icons/io5'
import { Button } from '@/components/Button'
import { CreateShowModal } from '@/features/show/components/UserShows/CreateShowModal/CreateShowModal'
import { useBoolean } from '@/hooks/useBoolean'

export const CreateShowButton = () => {
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

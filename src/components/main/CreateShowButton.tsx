'use client'

import { IoAdd } from 'react-icons/io5'
import { Button } from '@/components/ui/Button/Button'
import { useBoolean } from '@/hooks/useBoolean'
import { CreateShowModal } from './CreateShowModal/CreateShowModal'

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

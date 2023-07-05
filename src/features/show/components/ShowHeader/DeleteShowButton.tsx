'use client'

import { AiOutlineDelete } from 'react-icons/ai'
import { Button, ConfirmModal } from '@/components/'
import { useDeleteUserShow } from '@/features/show/hooks/useDeleteUserShow'
import { useBoolean } from '@/hooks/useBoolean'
import type { Show } from '@/server/modules/shows/showsSchemas'

type DeleteShowButtonProps = Readonly<{
	show: Show
}>

export const DeleteShowButton = ({ show }: DeleteShowButtonProps) => {
	const { value, setTrue, setFalse } = useBoolean(false)
	const { deleteUserShow, isLoading } = useDeleteUserShow()
	return (
		<>
			<Button
				type='button'
				variant='danger'
				onClick={setTrue}
				aria-label='Delete this post'
				icon={<AiOutlineDelete />}
			>
				Delete Show
			</Button>
			<ConfirmModal
				title='Do you want to delete this show?'
				isOpen={value}
				variant='danger'
				isLoading={isLoading}
				onClose={setFalse}
				onConfirm={() => deleteUserShow(show.id)}
			/>
		</>
	)
}

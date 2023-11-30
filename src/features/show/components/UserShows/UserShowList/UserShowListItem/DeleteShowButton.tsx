import { useSession } from 'next-auth/react'
import { AiOutlineDelete } from 'react-icons/ai'

import { ConfirmModal } from '@/components/ConfirmModal/'
import { IconButton } from '@/components/IconButton'
import { useDeleteUserShow } from '@/features/show/hooks/useDeleteUserShow'
import { useBoolean } from '@/hooks/useBoolean'

import type { Show } from '@/server/modules/shows/showsSchemas'

type DeleteShowButtonProps = Readonly<{
	show: Show
}>

export const DeleteShowButton = ({ show: { id, author } }: DeleteShowButtonProps) => {
	const { data } = useSession()
	const { value, setTrue, setFalse } = useBoolean(false)
	const { deleteUserShow, isLoading } = useDeleteUserShow()

	if (data?.user.id !== author.id) {
		return null
	}

	return (
		<>
			<div className='absolute left-1 top-1 z-50'>
				<IconButton variant='danger' label='Delete this post' icon={<AiOutlineDelete />} onClick={setTrue} />
			</div>
			<ConfirmModal
				title='Do you want to delete this show?'
				isOpen={value}
				variant='danger'
				isLoading={isLoading}
				onClose={setFalse}
				onConfirm={() => deleteUserShow(id)}
			/>
		</>
	)
}

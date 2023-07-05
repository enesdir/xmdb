'use client'

import { useRouter } from 'next/navigation'
import { Modal } from '@/components/'
import type { Show } from '@/server/modules/shows/showsSchemas'
import { SingleShow } from './SingleShow'

type SinglePostModalProps = Readonly<{
	show: Show
}>

export const SingleShowModal = ({ show }: SinglePostModalProps) => {
	const { back, refresh } = useRouter()
	return (
		<Modal
			onClose={() => {
				back()
				refresh()
			}}
			large
			isOpen
		>
			<SingleShow show={show} />
		</Modal>
	)
}

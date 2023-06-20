'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Modal } from '@/components/ui/Modal/Modal'
import { useCacheValue } from '@/hooks/useCacheValue'
import { useModal } from '@/hooks/useModal'
import type { Show } from '@/server/modules/shows/showsSchemas'
import { UserShowDetails } from './UserShowDetails'

type UserShowModalProps = Readonly<{
	show: Show | null
}>

export const UserShowModal = ({ show }: UserShowModalProps) => {
	const { isOpen, openModal, closeModal } = useModal(false)
	const { value, setCache } = useCacheValue<Show>()
	const { replace } = useRouter()

	useEffect(() => {
		if (show) {
			setCache(show)
			openModal()
		} else {
			closeModal()
		}
	}, [show, setCache, openModal, closeModal])

	return (
		<Modal
			isOpen={isOpen}
			onClose={() => {
				replace(`/${value?.author.username}`)
			}}
		>
			<Modal.Title>{value?.author.name}</Modal.Title>
			{value && <UserShowDetails show={value} />}
		</Modal>
	)
}

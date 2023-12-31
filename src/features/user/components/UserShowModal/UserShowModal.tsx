'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { Modal } from '@/components/Modal/'
import { useBoolean } from '@/hooks/useBoolean'
import { useCacheValue } from '@/hooks/useCacheValue'
import { UserShowDetails } from './UserShowDetails'

import type { Show } from '@/server/modules/shows/showsSchemas'

type UserShowModalProps = Readonly<{
	show: Show | null
}>

export const UserShowModal = ({ show }: UserShowModalProps) => {
	const { value: modalValue, setTrue, setFalse } = useBoolean(false)
	const { value, setCache } = useCacheValue<Show>()
	const { replace } = useRouter()

	useEffect(() => {
		if (show) {
			setCache(show)
			setTrue()
		} else {
			setFalse()
		}
	}, [show, setCache, setTrue, setFalse])

	return (
		<Modal
			isOpen={modalValue}
			onClose={() => {
				replace(`/user/${value?.author.username}`)
			}}
		>
			<Modal.Title>{value?.author.name}</Modal.Title>
			{value && <UserShowDetails show={value} />}
		</Modal>
	)
}

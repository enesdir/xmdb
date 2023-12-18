import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import { Modal } from '@/components/Modal/'
import { SingleShow } from '@/features/show/components/SingleShow'
import { server } from '@/trpc/server'

import type { PageParams } from '@/types/pageParams'

export default async function SingleShowModalPage({ params }: { params: PageParams<['showId']> }) {
	const show = await server.shows.getById.query({ id: Number(params.showId) })
	if (!show) {
		notFound()
	}
	return (
		<Modal size='xl' isOpen hasRoute variant='primary'>
			<Suspense>
				<SingleShow />
			</Suspense>
		</Modal>
	)
}

import { Suspense } from 'react'

import { Modal } from '@/components/Modal/'
import { SingleShow } from '@/features/show/components/SingleShow'
import { server } from '@/trpc/server'

import type { PageParams } from '@/types/pageParams'

export default async function SingleShowModalPage({ params }: { params: PageParams<['showId']> }) {
	const show = await server.shows.getById.query({ id: Number(params.showId) })
	return (
		<Modal large isOpen>
			<Suspense>
				<SingleShow show={show} />
			</Suspense>
		</Modal>
	)
}

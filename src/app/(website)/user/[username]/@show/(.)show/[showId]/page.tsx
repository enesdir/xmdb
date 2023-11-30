import { Suspense } from 'react'

import { Modal } from '@/components/Modal/'
import { SingleShow } from '@/features/show/components/SingleShow'
import { getShowById } from '@/lib/show'

import type { PageParams } from '@/types/pageParams'

export default async function SingleShowModalPage({ params }: { params: PageParams<['showId']> }) {
	const show = await getShowById(Number(params.showId))
	return (
		<Modal large isOpen>
			<Suspense>
				<SingleShow show={show} />
			</Suspense>
		</Modal>
	)
}

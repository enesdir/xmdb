import { SingleShowModal } from '@/components/main/SingleShowModal'
import { getShowById } from '@/lib/show'
import type { PageParams } from '@/types/pageParams'

export default async function SingleShowModalPage({ params }: { params: PageParams<'id'> }) {
	const show = await getShowById(Number(params.id))
	return <SingleShowModal show={show} />
}

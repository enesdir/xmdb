import { SingleShowModal } from '@/components/main/SingleShowModal'
import { getShowById } from '@/lib/show'
import type { PageParams } from '@/types/pageParams'

export default async function SinglePostModalPage({ params }: { params: PageParams<'slug'> }) {
	const show = await getShowById(Number(params.slug))

	return <SingleShowModal show={show} />
}

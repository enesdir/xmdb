import { ImagesSlider } from '@/components/main/ImagesSlider'
import type { Show } from '@/server/modules/shows/showsSchemas'

type UserShowDetailsProps = Readonly<{
	show: Show
}>

export const UserShowDetails = ({
	show: {
		description,
		images,
		author: { username },
	},
}: UserShowDetailsProps) => (
	<>
		<ImagesSlider images={images} />
		<div className='mt-1.5 leading-5'>
			<p className='float-left mr-1 font-medium'>{username}</p>
			<div className='whitespace-pre-line break-all'>{description}</div>
		</div>
	</>
)

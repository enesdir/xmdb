import type { Show } from '@/server/modules/shows/showsSchemas'

type ShowDetailsProps = Readonly<{
	show: Show
}>

export const ShowDetails = ({ show: { title, description } }: ShowDetailsProps) => (
	<>
		<h3 className='font-medium'>{title}</h3>
		<div className='mt-0.5 whitespace-pre-line break-all text-justify'>{description}</div>
	</>
)

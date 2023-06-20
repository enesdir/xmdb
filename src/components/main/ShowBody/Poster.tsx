import Image from 'next/image'
import type { Show } from '@/server/modules/shows/showsSchemas'

type PosterProps = Readonly<{
	show: Show
}>

export const Poster = ({ show }: PosterProps) => {
	return (
		<div className='relative h-60 w-60 shrink-0 grow-0 overflow-hidden'>
			{/* @ts-expect-error */}
			<Image src={show.images[0]} alt={show.title} className='object-cover' fill />
		</div>
	)
}

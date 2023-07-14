import Image from 'next/image'
import type { Show } from '@/server/modules/shows/showsSchemas'

type PosterProps = Readonly<{
	show: Show
}>

export const Poster = ({ show }: PosterProps) => {
	return (
		<div className='relative inline-flex w-full shrink-0 grow-0 overflow-hidden'>
			<div className='relative inline-flex h-36 w-32 overflow-hidden sm:h-60 sm:w-60'>
				{/* @ts-expect-error */}
				<Image src={show.images[0]} alt={show.title} className='object-cover' fill />
			</div>
		</div>
	)
}

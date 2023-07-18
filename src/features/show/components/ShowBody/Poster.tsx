import Image from 'next/image'
import Link from 'next/link'
import type { Show } from '@/server/modules/shows/showsSchemas'

type PosterProps = Readonly<{
	show: Show
}>

export const Poster = ({ show }: PosterProps) => {
	return (
		<div className='absolute left-4 top-[calc(100%_+_0.75rem)] z-[3] flex w-[95px] sm:static sm:left-0 sm:flex sm:w-[calc(27.65%_-_0.125rem)] lg:w-[calc(22.75%_-_0.125rem)]'>
			<div className='relative mr-0 inline-flex w-full min-w-[auto]'>
				<div className='relative inline-flex w-full overflow-hidden before:relative before:block before:w-full before:pb-[148%] before:content-[""]'>
					<Image
						// @ts-expect-error
						src={show.images[0]}
						alt={show.title}
						className='absolute inset-0 object-cover'
						fill
						sizes='50vw, (min-width: 480px) 34vw, (min-width: 600px) 26vw, (min-width: 1024px) 16vw, (min-width: 1280px) 16vw'
					/>
				</div>
				<Link
					href='#'
					className='absolute inset-0 flex h-full w-full items-end p-2 hover:text-[#f5c518] hover:opacity-80 active:opacity-30'
					aria-label={`View ${show.title} Poster`}
				>
					<div className='absolute inset-0 z-[1] h-full w-full text-white opacity-0'></div>
				</Link>
			</div>
		</div>
	)
}

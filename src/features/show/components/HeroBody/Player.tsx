import type { Show } from '@/server/modules/shows/showsSchemas'

import Link from 'next/link'
import { BsThreeDotsVertical } from 'react-icons/bs'

import BlurImage from '@/components/BlurImage'
import { IconButton } from '@/components/IconButton'
import { getBlurDataURL } from '@/lib/images'

type PlayerProps = Readonly<{
	show: Show
}>
export const Player = async ({ show }: PlayerProps) => {
	return (
		<div className='relative mr-0 inline-flex w-full min-w-[auto] cursor-pointer flex-col md:ml-1 md:w-[calc(72.35%_-_0.125rem)] md:bg-none md:pb-0 lg:mr-1 lg:w-[calc(60%_-_0.125rem)]'>
			<div className='absolute right-2.5 top-2.5 z-10'>
				<IconButton
					variant='rounded'
					label='Video Preferences'
					icon={<BsThreeDotsVertical />}
					className='bg-[rgba(18,18,18,0.45)] p-2 text-white'
				/>
			</div>
			<div className='relative mr-0 inline-flex w-full min-w-[auto] cursor-pointer bg-[rgb(18,18,18)] pb-14 md:bg-none md:pb-0'>
				<div
					className='relative inline-flex w-full min-w-[auto] overflow-hidden text-white/10 before:relative before:block before:w-full before:bg-white/10 before:pb-[56.25%] before:content-[""]'
					style={{ width: '100%' }}
				>
					<BlurImage
						// @ts-expect-error todo add fallback
						src={show.images[0]}
						alt='Home Video Trailer from X'
						fill
						priority={false} // since it's above the fold
						placeholder='blur'
						sizes='100vw, (min-width: 480px) 68vw, (min-width: 600px) 52vw, (min-width: 1024px) 32vw, (min-width: 1280px) 32vw'
						blurDataURL={await getBlurDataURL(show.images[0]!)}
						className='absolute inset-0 object-fill'
					/>
				</div>
				<div className='invisible absolute left-0 top-0 h-full w-full opacity-0 transition-opacity delay-300'></div>
				<Link
					href='#'
					className='absolute inset-0 box-border flex h-full w-full items-end p-2 text-sm font-normal normal-case leading-5 tracking-[0.01786em] text-white'
					aria-label={`Watch ${show.title}`}
				></Link>
			</div>
		</div>
	)
}

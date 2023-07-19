import Image from 'next/image'
import Link from 'next/link'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IconButton } from '@/components/IconButton'
import type { Show } from '@/server/modules/shows/showsSchemas'

type PlayerProps = Readonly<{
	show: Show
}>
export const Player = ({ show }: PlayerProps) => {
	return (
		<div className='relative mr-0 inline-flex w-full min-w-[auto] cursor-pointer flex-col sm:ml-1 sm:w-[calc(72.35%_-_0.125rem)] sm:bg-none sm:pb-0 lg:mr-1 lg:w-[calc(60%_-_0.125rem)]'>
			<div className='absolute right-2.5 top-2.5 z-10'>
				<IconButton
					variant='rounded'
					label='Video Preferences'
					icon={<BsThreeDotsVertical />}
					className='bg-[rgba(18,18,18,0.45)] p-2 text-white'
				/>
			</div>
			<div className='relative mr-0 inline-flex w-full min-w-[auto] cursor-pointer bg-[rgb(18,18,18)] pb-14 sm:bg-none sm:pb-0'>
				<div
					className='relative inline-flex w-full min-w-[auto] overflow-hidden text-white/10 before:relative before:block before:w-full before:bg-white/10 before:pb-[56.25%] before:content-[""]'
					style={{ width: '100%' }}
				>
					<Image
						alt='Home Video Trailer from Sony Pictures Home Entertainment'
						className='absolute inset-0 object-fill '
						// @ts-expect-error
						src={show.images[0]}
						sizes='100vw, (min-width: 480px) 68vw, (min-width: 600px) 52vw, (min-width: 1024px) 32vw, (min-width: 1280px) 32vw'
						fill
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

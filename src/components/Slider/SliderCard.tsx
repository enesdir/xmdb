import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { HiOutlinePlus } from 'react-icons/hi2'
import { IoMdPlay } from 'react-icons/io'
import { MdAdd, MdInfoOutline } from 'react-icons/md'

import { BlurImage } from '@/components/BlurImage'
import { Button } from '@/components/Button'
import { CustomLink } from '@/components/CustomLink'
import { IconButton } from '@/components/IconButton'
import { Ribbon } from '@/components/Icons/Ribbon'
import { getTmdbImageURL } from '@/lib/generateTmdbImage'

import type { RouterOutputs } from '@/trpc/shared'

type SliderCardProps = {
	show: NonNullable<RouterOutputs['tmdb']['discover']['results']>[0]
}
export const SliderCard = ({ show }: SliderCardProps) => {
	const imageUrl = getTmdbImageURL({
		path: show.poster_path || show.backdrop_path,
		size: 'sm',
		category: 'poster',
	})
	// @ts-expect-error: do better types
	const isShow: boolean = show.name || show.original_name
	return (
		<div className='group/card col-span-1 m-0 inline-flex w-full min-w-[auto] flex-col gap-2 bg-brand-black2'>
			<div className='relative w-full overflow-hidden rounded-sm'>
				<IconButton
					icon={
						<>
							<Ribbon />
							<MdAdd
								size={24}
								color='white'
								className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
							/>
						</>
					}
					className='absolute left-0 top-0 z-10'
					label='Watch List button'
					variant='base'
				/>
				<div className='relative h-[17rem] w-full'>
					<BlurImage
						src={imageUrl}
						// @ts-expect-error: do better types
						alt={`Card Image ${show.original_title ?? show.title ?? show.name ?? show.original_name}`}
						fill
						loading='lazy'
						sizes='100vw, (min-width: 480px) 68vw, (min-width: 600px) 52vw, (min-width: 1024px) 32vw, (min-width: 1280px) 32vw'
						className='aspect-h-17 aspect-w-12 absolute inset-0 object-cover transition group-hover/card:scale-110'
					/>
				</div>
			</div>

			<div className='mb-1 flex min-h-[2rem] items-center px-2'>
				<span className='mr-2 inline-flex items-center text-brand-gray5'>
					<AiFillStar color='#f5c518' className='mr-1 text-base' />
					{show.vote_average}
				</span>
				<IconButton
					icon={<AiOutlineStar />}
					label='TV/Show info'
					className='text-base text-brand-blue'
					variant='ghost'
				/>
			</div>

			<CustomLink href={isShow ? `/tv/${show.id}` : `/title/${show.id}`} variant='poster'>
				{/* @ts-expect-error: do better types */}
				<span> {show.original_title ?? show.title ?? show.name ?? show.original_name ?? 'Title'}</span>
			</CustomLink>

			<div className='px-2 pt-2'>
				<Button variant='secondary' icon={<HiOutlinePlus />} fill>
					WatchList
				</Button>
				<div className='flex items-center justify-center px-0 py-2 md:justify-between'>
					<Button variant='text' icon={<IoMdPlay />}>
						Trailer
					</Button>
					<IconButton
						icon={<MdInfoOutline />}
						label='TV/Show info'
						className='text-2xl text-white'
						variant='rounded'
					/>
				</div>
			</div>
		</div>
	)
}

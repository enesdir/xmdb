import Link from 'next/link'

import { BlurImage } from '@/components/BlurImage'
import { getTmdbImageURL } from '@/lib/generateTmdbImage'
import { getBlurDataURL } from '@/lib/images'

import type { RouterOutputs } from '@/trpc/shared'

type PosterProps = Readonly<{
	show: NonNullable<RouterOutputs['tmdb']['getShowById']> | NonNullable<RouterOutputs['tmdb']['getMovieById']>
}>

export const Poster = async ({ show }: PosterProps) => {
	const imageUrl = getTmdbImageURL({
		path: show.poster_path || show.backdrop_path,
		size: 'md',
		category: 'poster',
	})
	return (
		<div className='absolute left-4 top-brand-s-7 z-[3] flex w-[95px] sm:left-0 sm:w-[120px] md:static md:left-0 md:flex md:w-brand-s-6 lg:w-brand-s-5'>
			<div className='relative mr-0 inline-flex w-full min-w-[auto]'>
				<div className='relative inline-flex w-full overflow-hidden before:relative before:block before:w-full before:pb-[148%] before:content-[""]'>
					<BlurImage
						src={imageUrl}
						// @ts-expect-error: do better types
						alt={`${show.original_title ?? show.title ?? show.name ?? show.original_name} Image`}
						fill
						priority // since it's above the fold
						placeholder='blur'
						sizes='50vw, (min-width: 480px) 34vw, (min-width: 600px) 26vw, (min-width: 1024px) 16vw, (min-width: 1280px) 16vw'
						blurDataURL={await getBlurDataURL(imageUrl)}
						className='absolute inset-0 object-fill'
					/>
				</div>
				<Link
					href='#'
					className='absolute inset-0 flex h-full w-full items-end p-2 hover:text-[#f5c518] hover:opacity-80 active:opacity-30'
					// @ts-expect-error: do better types
					aria-label={`View ${show.original_title ?? show.title ?? show.name ?? show.original_name} Poster`}
				>
					<div className='absolute inset-0 z-[1] h-full w-full text-white opacity-0'></div>
				</Link>
			</div>
		</div>
	)
}

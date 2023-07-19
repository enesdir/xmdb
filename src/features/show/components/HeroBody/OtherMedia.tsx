import Link from 'next/link'
import { AiOutlinePicture } from 'react-icons/ai'
import { BiMoviePlay } from 'react-icons/bi'
import { displayMediaCount } from '@/features/show/utils/displayMediaCount'

type OtherMediaProps = Readonly<{
	media: { images: string[]; videos: string[] }
}>
export const OtherMedia = ({ media }: OtherMediaProps) => {
	return (
		<div className='flex w-auto grow flex-row justify-between gap-1 lg:flex-col'>
			<Link
				href='#'
				className='min-h-[2.25rem] max-w-[calc(50%_-_0.125rem)] grow flex-col items-center rounded-b-md bg-white/5 hover:bg-white/10 lg:max-h-[calc(50%_-_0.125rem)] lg:w-full lg:max-w-full lg:flex-row lg:rounded-r-md lg:rounded-bl-none'
			>
				<div className='flex h-full flex-row items-center justify-center gap-2 text-white lg:flex-col'>
					<BiMoviePlay className='text-sm sm:text-3xl' />
					<span className='text-sm uppercase tracking-widest sm:text-xl'>{`${displayMediaCount(
						media.images.length
					)} videos`}</span>
				</div>
			</Link>
			<Link
				href='#'
				className='min-h-[2.25rem] max-w-[calc(50%_-_0.125rem)] grow flex-col items-center rounded-b-md bg-white/5 hover:bg-white/10 lg:max-h-[calc(50%_-_0.125rem)] lg:w-full lg:max-w-full lg:flex-row lg:rounded-r-md lg:rounded-bl-none'
			>
				<div className='flex h-full flex-row items-center justify-center gap-2 text-white lg:flex-col'>
					<AiOutlinePicture className='text-sm sm:text-3xl' />
					<span className='text-sm uppercase tracking-widest sm:text-xl'>{`${displayMediaCount(
						media.videos.length
					)} images`}</span>
				</div>
			</Link>
		</div>
	)
}

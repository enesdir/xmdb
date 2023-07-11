import Link from 'next/link'
import { AiOutlinePicture } from 'react-icons/ai'
import { BiMoviePlay } from 'react-icons/bi'
import { displayMediaCount } from '@/features/show/utils/displayMediaCount'
import type { Show } from '@/server/modules/shows/showsSchemas'

type OtherMediaProps = Readonly<{
	show: Show
}>
export const OtherMedia = ({ show }: OtherMediaProps) => {
	return (
		<div className='flex h-full w-full grow flex-row justify-between md:flex-col'>
			<div className='grow flex-col items-center bg-teal-100 md:flex-row'>
				<Link href='#'>
					<BiMoviePlay className='text-sm md:text-3xl' />
					<span>{`${displayMediaCount(Math.floor(1 + Math.random() * 110))} videos`}</span>
				</Link>
			</div>
			<div className='grow flex-col bg-teal-100 md:flex-row'>
				<Link href='#'>
					<AiOutlinePicture className='text-sm md:text-3xl' />
					<span>{`${displayMediaCount(Math.floor(1 + Math.random() * 110))} images`}</span>
				</Link>
			</div>
		</div>
	)
}

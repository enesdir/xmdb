import Link from 'next/link'
import { BsDot } from 'react-icons/bs'
import { formatMinutes } from '@/features/show/utils/formatMinutes'
import type { Show } from '@/server/modules/shows/showsSchemas'
import { HeroRight } from './HeroRight'

type ShowHeaderProps = Readonly<{
	show: Show
}>

export const ShowHeader = ({ show }: ShowHeaderProps) => {
	return (
		<div className='flex w-full flex-col justify-between py-2 md:flex-row'>
			<div>
				<span className='text-2xl font-extrabold uppercase text-white md:text-3xl'>{show.title}</span>
				<div className='flex flex-row pt-2 text-center text-sm text-gray-200'>
					<Link href='#'>{show.media_type}</Link>
					<span>
						<BsDot className='text-xl' />
					</span>
					<Link href='#'>{'PG-13'}</Link>
					<span>
						<BsDot className='text-xl' />
					</span>
					<span>{formatMinutes(Math.floor(1 + Math.random() * 120))}</span>
				</div>
			</div>
			<HeroRight rate={7} numberOfVoters={100000} popularity={{ score: 1, rating: 3 }} />
		</div>
	)
}

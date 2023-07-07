import Link from 'next/link'
import { BsDot } from 'react-icons/bs'
import type { Show } from '@/server/modules/shows/showsSchemas'
import { formatMinutes } from '../../utils/formatMinutes'
import { HeroRight } from './HeroRight'
import { UserControls } from './UserControls'

type ShowHeaderProps = Readonly<{
	show: Show
}>

export const ShowHeader = ({ show }: ShowHeaderProps) => {
	return (
		<div className='w-full'>
			<UserControls show={show} />
			<div className='flex w-full flex-col justify-between py-2 md:flex-row'>
				<div className=''>
					<span className='text-2xl uppercase text-gray-900 md:text-3xl'>{show.title}</span>
					<div className='flex flex-row pt-2 text-center text-sm opacity-50'>
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
				<HeroRight />
			</div>
		</div>
	)
}

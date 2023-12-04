import { crewCategories } from '@/features/show/constants/crewCategories'
import { Trends } from '../Trends/Trends'
import { ChipList } from './ChipList'
import { HeroCrewDesktop } from './HeroCrew/HeroCrewDesktop'
import { HeroCrewMobile } from './HeroCrew/HeroCrewMobile'
import { HeroWatchList } from './HeroWatchList'
import { Plot } from './Plot'

import type { Show } from '@/server/modules/shows/showsSchemas'

type HeroDetailProps = Readonly<{
	show: Show
}>
export const HeroDetail = ({ show }: HeroDetailProps) => {
	return (
		<div className='mx-4 flex flex-col lg:w-full lg:flex-row lg:items-center lg:justify-between'>
			<div className='min-h-brand-s-1 pl-brand-s-9 sm:min-h-brand-s-2 sm:pl-brand-s-11 md:min-h-0 md:pl-0 lg:w-brand-s-10'>
				<section className='lg:mb-3'>
					<ChipList genres={['Action', 'Adventure', 'Sci-Fi']} />
					<Plot text={show.description} />
					<HeroCrewDesktop crewCategories={crewCategories} />
				</section>
			</div>
			<div className='lg:w-brand-s-12'>
				<Trends
					trends={{
						rate: 7.9,
						numberOfVoters: Math.floor((1 + Math.random()) * 1000000),
						popularity: { score: 96, rating: 50, trending: 'up' },
					}}
					className='mb-4 mt-2 flex lg:hidden'
				/>
				<HeroCrewMobile crewCategories={crewCategories} />
				<HeroWatchList isAdded={false} numberOfAddedUser={254000} />
			</div>
		</div>
	)
}

import type { Show } from '@/server/modules/shows/showsSchemas'
import { Trends } from '../Trends/Trends'
import { ChipList } from './ChipList'
import { Plot } from './Plot'

type HeroDetailProps = Readonly<{
	show: Show
}>
export const HeroDetail = ({ show }: HeroDetailProps) => {
	return (
		<div className='mx-4 flex flex-col lg:w-full lg:flex-row lg:items-center lg:justify-between'>
			<div className='min-h-[calc(140.6px_+_0.5rem)] pl-[calc(95px_+_1rem)] sm:min-h-0 sm:pl-0 lg:w-[calc(66.66%_-_0.5rem)] xs:min-h-[calc(177.6px_+_0.5rem)] xs:pl-[calc(120px_+_1rem)]'>
				<section className='lg:mb-3'>
					<ChipList genres={['Action', 'Adventure', 'Sci-Fi']} />
					<Plot text={show.description} />
					<div className='hidden lg:block'></div>
				</section>
			</div>
			<div className='lg:w-[calc(_33.33%_-_(_1rem_*_2)_+_0.25rem_)]'>
				<Trends
					trends={{
						rate: 7.9,
						numberOfVoters: Math.floor((1 + Math.random()) * 1000000),
						popularity: { score: 96, rating: 50, trending: 'up' },
					}}
					className='flex lg:hidden'
				/>
			</div>
		</div>
	)
}
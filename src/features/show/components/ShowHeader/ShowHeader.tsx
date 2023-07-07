import type { Show } from '@/server/modules/shows/showsSchemas'
import { HeroRight } from './HeroRight'
import { UserControls } from './UserControls'

type ShowHeaderProps = Readonly<{
	show: Show
}>

export const ShowHeader = ({ show }: ShowHeaderProps) => {
	return (
		<div className='w-full'>
			<UserControls show={show} />
			<div className='flex w-full justify-between py-2'>
				<div className='flex flex-col justify-start border-2 border-red-200'>
					<span className='text-2xl uppercase text-gray-900'>{show.title}</span>
					<div className='flex flex-row pt-2 text-lg'>
						<p className='rounded-xl font-semibold'>
							<span className='text-sm opacity-50'>{show.media_type}</span>
							<span className='text-center text-lg'>.</span>
							<span className='text-sm opacity-50'>{'pg'}</span>
						</p>
					</div>
				</div>
				<HeroRight />
			</div>
		</div>
	)
}

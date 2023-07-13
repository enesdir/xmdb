import type { PropsWithChildren } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Button } from '@/components/'
import { intToString } from '@/features/show/utils/intToString'
import { Popularity } from './Popularity'

type HeroRightContainerProps = PropsWithChildren & { title: string }
export const HeroRightContainer = ({ children, title }: HeroRightContainerProps) => {
	return (
		<div className='inline-flex flex-col items-center justify-center p-0.5'>
			<span className='mb-0.5 flex text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 md:text-lg'>
				{title}
			</span>
			<div className='items-center justify-center px-0.5 py-0'>{children}</div>
		</div>
	)
}
type HeroRightProps = {
	numberOfVoters: number
	rate: number
	popularity: { score: number; rating: number }
}

export const HeroRight = ({ numberOfVoters, rate, popularity }) => {
	return (
		<div className='flex items-start justify-between space-x-1'>
			<HeroRightContainer title='RATING'>
				<Button
					icon={<AiFillStar color='#f5c518' className='text-2xl md:text-3xl' />}
					variant='text'
					className='h-10 p-1'
				>
					<div className='inline-flex flex-col items-start'>
						<div className='-mb-1 inline-block whitespace-nowrap rounded-xl font-semibold tracking-wider'>
							<span className='text-xs font-semibold md:text-lg'>{rate}</span>
							<span className='text-xs opacity-50 md:text-sm'>
								{'/'}
								{'10'}
							</span>
						</div>
						<span className='text-xs text-gray-400'>
							{intToString(Math.floor((1 + Math.random()) * 1000000))}
						</span>
					</div>
				</Button>
			</HeroRightContainer>
			<HeroRightContainer title='YOUR RATING'>
				<Button
					icon={<AiOutlineStar color='#5799ef' className='text-2xl md:text-3xl' />}
					variant='text'
					className='h-10 p-1'
				>
					<span className='text-lg tracking-wider text-[#5799ef] md:text-xl'>Rate</span>
				</Button>
			</HeroRightContainer>
			<HeroRightContainer title='Popularity'>
				<Button variant='text' className='h-10 p-1'>
					<Popularity
						score={Math.floor((1 + Math.random()) * 100)}
						rating={Math.floor((1 + Math.random()) * 50)}
					/>
				</Button>
			</HeroRightContainer>
		</div>
	)
}

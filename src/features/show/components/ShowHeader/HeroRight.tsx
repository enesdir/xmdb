import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Button } from '@/components/'
import { intToString } from '../../utils/intToString'
import { Popularity } from './Popularity'

export const HeroRightContainer = ({ children, title }) => {
	return (
		<div className='inline-flex flex-col items-center justify-center p-0.5'>
			<span className='mb-0.5 flex text-sm uppercase tracking-wider text-gray-400'>{title}</span>
			<div className='items-center justify-center px-0.5 py-0 text-lg '>{children}</div>
		</div>
	)
}

export const HeroRight = () => {
	return (
		<div className='flex w-full flex-col items-start justify-start space-x-1 border-2 border-red-200 md:flex-row'>
			<HeroRightContainer title='RATING'>
				<Button
					icon={<AiFillStar color='#f5c518' size={30} />}
					variant='text'
					className='bg-transparent hover:bg-blue-400'
				>
					<div className='inline-flex flex-col items-start'>
						<div className='-mb-1 inline-block whitespace-nowrap rounded-xl  font-semibold tracking-wider'>
							<span className='text-lg'>9.0</span>
							<span className='text-sm opacity-50'>
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
					icon={<AiOutlineStar color='#5799ef' size={30} />}
					variant='text'
					className=' bg-transparent hover:bg-blue-400'
				>
					<span className='text-lg tracking-wider text-[#5799ef]'>Rate</span>
				</Button>
			</HeroRightContainer>
			<HeroRightContainer title='Popularity'>
				<Button variant='text' className='bg-transparent hover:bg-blue-400'>
					<Popularity
						score={Math.floor((1 + Math.random()) * 100)}
						rating={Math.floor((1 + Math.random()) * 50)}
					/>
				</Button>
			</HeroRightContainer>
		</div>
	)
}

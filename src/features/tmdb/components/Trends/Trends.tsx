import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { Button } from '@/components/Button'
import { intToString } from '@/features/show/utils/intToString'
import { cn } from '@/utils/cn'
import { Popularity } from './Popularity'

import type { PropsWithChildren } from 'react'
import type { PopularityType } from './Popularity'

type HeroRightContainerProps = PropsWithChildren & { title: string; className?: string }
export const HeroRightContainer = ({ children, title, className }: HeroRightContainerProps) => {
	return (
		<div className={cn('inline-flex flex-col items-center p-1', className)}>
			<div className='mb-1 hidden whitespace-nowrap text-xs font-semibold uppercase tracking-[0.17em] text-white/70 md:flex md:tracking-[0.16667em]'>
				{title}
			</div>
			{children}
		</div>
	)
}
type HeroRightProps = {
	trends: { numberOfVoters: number; rate: number; popularity: PopularityType }
	className?: string
}

export const Trends = ({ trends: { numberOfVoters, rate, popularity }, className }: HeroRightProps) => {
	return (
		<div
			className={cn(
				'max-md:-ml-1 max-md:mt-2 -ml-2 grow-0 flex-row items-end justify-start space-x-1 pr-0 lg:mb-4 lg:justify-end',
				className
			)}
		>
			<div className='mr-0.5 flex flex-row items-start justify-start px-0.5 py-1'>
				<HeroRightContainer title='RATING' className='mr-2'>
					<Button
						icon={<AiFillStar color='#f5c518' className='text-2xl lg:text-3xl' />}
						variant='text'
						className='m-0 inline-flex min-h-[2.25rem] min-w-[3rem] max-w-full items-center px-2 py-0 font-medium'
					>
						<div className='inline-flex flex-row items-start truncate pr-1 lg:flex-col'>
							<div className='mb-0 inline-block whitespace-nowrap font-normal leading-6 tracking-brand-wide'>
								<span className='pr-0.5 text-sm font-semibold tracking-[0.0125em] lg:text-lg'>
									{Math.round(rate * 10) / 10}
								</span>
								<span className='text-xs text-white/70 md:text-sm'>
									{'/'}
									{'10'}
								</span>
							</div>
							<div className='mx-1 block text-white/70 before:content-["."] lg:hidden'></div>
							<div className='mb-0 whitespace-nowrap text-xs font-normal leading-6 tracking-brand-wide text-white/70 lg:-mt-1 lg:leading-4'>
								{intToString(numberOfVoters)}
							</div>
						</div>
					</Button>
				</HeroRightContainer>
				<HeroRightContainer title='YOUR RATING' className='mr-2'>
					<Button
						icon={<AiOutlineStar className='text-2xl text-brand-blue lg:text-3xl' />}
						variant='text'
						className='m-0 inline-flex min-h-[2.25rem] min-w-[3rem] max-w-full items-center px-2 py-0 font-medium'
					>
						<span className='text-lg tracking-wider text-brand-blue lg:text-xl'>Rate</span>
					</Button>
				</HeroRightContainer>
				<HeroRightContainer title='Popularity'>
					<Button
						variant='text'
						className='m-0 inline-flex min-h-[2.25rem] min-w-[3rem] max-w-full items-center px-2 py-0 font-medium tracking-tight'
					>
						<Popularity score={popularity.score} rating={popularity.rating} trending={popularity.trending} />
					</Button>
				</HeroRightContainer>
			</div>
		</div>
	)
}

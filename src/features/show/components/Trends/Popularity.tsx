import type { IconType } from 'react-icons'

import { BsDot } from 'react-icons/bs'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6'
import { MdTrendingFlat } from 'react-icons/md'

import { cn } from '@/utils/cn'

type Trending = 'up' | 'down' | 'neutral'

export type PopularityType = { score: number; rating: number; trending: Trending }
type TrendIconInfo = {
	icon: IconType
	ratingIcon: IconType
}
const iconMapper: { [key in Trending]: TrendIconInfo } = {
	up: {
		icon: FaArrowTrendUp,
		ratingIcon: FaCaretUp,
	},
	down: {
		icon: FaArrowTrendDown,
		ratingIcon: FaCaretDown,
	},
	neutral: {
		icon: MdTrendingFlat,
		ratingIcon: BsDot,
	},
}

export const Popularity = ({ score, rating, trending = 'neutral' }: PopularityType) => {
	const trend = iconMapper[trending]
	if (!trending) {
		console.warn(`No icon found for `)
		return <span>icon</span>
	}
	return (
		<div className='inline-flex items-center truncate tracking-wider'>
			<trend.icon
				className={cn('rounded-full border-2 border-solid pr-0.5 text-2xl md:text-3xl', [
					trending === 'up' && 'border-green-600 text-green-600',
					trending === 'down' && 'border-red-600 text-red-600',
					trending === 'neutral' && 'border-white/70 text-white/70',
				])}
			/>
			<div className='inline-flex flex-row items-center'>
				<span className='pl-0.5 text-base font-semibold text-white md:text-2xl'>{score}</span>
				<trend.ratingIcon className='text-sm text-white/70 md:text-2xl' />
				<span className='text-xs text-white/70 md:text-lg'>{rating}</span>
			</div>
		</div>
	)
}

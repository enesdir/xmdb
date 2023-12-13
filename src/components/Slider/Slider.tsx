'use client'

import { useEffect, useRef, useState } from 'react'

import { RightArrow } from '@/components/Icons/RightArrow'
import { useBoolean } from '@/hooks/useBoolean'
import { Discover } from '@/server/modules/tmdb/tmdbSchemas'
import { cn } from '@/utils/cn'
import { SliderCard } from './SliderCard'

import type { RouterOutputs } from '@/trpc/shared'

type SliderProps = {
	data: NonNullable<RouterOutputs['tmdb']['discover']['results']> | Discover['results']
}

export const Slider = ({ data }: SliderProps) => {
	const sliderRef = useRef<HTMLDivElement>(null)
	const [sliderWidth, setSliderWidth] = useState(0)
	const [scrollPosition, setScrollPosition] = useState(0)

	const { value: showPrevButton, setValue: setShowPrevButton } = useBoolean(false)
	const { value: showNextButton, setValue: setShowNextButton } = useBoolean(true)

	useEffect(() => {
		if (sliderRef.current) {
			setSliderWidth(sliderRef.current.offsetWidth)
			const handleResize = () => setSliderWidth(sliderRef.current!.offsetWidth)
			window.addEventListener('resize', handleResize)
			return () => {
				window.removeEventListener('resize', handleResize)
			}
		}
	}, [])

	const handlePrevClick = () => {
		if (sliderRef.current) {
			const newPosition = Math.max(scrollPosition - sliderWidth, 0)
			setScrollPosition(newPosition)
			sliderRef.current.scrollTo({ left: newPosition, behavior: 'smooth' })
			setShowNextButton(true)
			if (newPosition === 0) {
				setShowPrevButton(false)
			}
		}
	}

	const handleNextClick = () => {
		if (sliderRef.current) {
			const newPosition = Math.min(scrollPosition + sliderWidth, sliderRef.current.scrollWidth - sliderWidth)
			setScrollPosition(newPosition)
			sliderRef.current.scrollTo({ left: newPosition, behavior: 'smooth' })
			setShowPrevButton(true)
			if (newPosition >= sliderRef.current.scrollWidth - sliderWidth) {
				setShowNextButton(false)
			}
		}
	}

	return (
		<div className='group/slider relative z-0 overflow-hidden' role='group'>
			<button
				onClick={handlePrevClick}
				className={cn(
					'duration-250 absolute left-4 top-1/2 z-10 inline-flex -translate-y-1/2 items-center justify-center rounded border border-solid border-white/70 bg-brand-black3/40 px-3 py-5 text-2xl opacity-0 transition-all ease-out',
					!showPrevButton
						? 'pointer-events-none'
						: 'pointer-events-auto group-hover/slider:opacity-100 hover:text-brand-yellow'
				)}
				aria-label='Prev Page'
				role='presentation'
			>
				<RightArrow className='rotate-180 overflow-hidden align-baseline' />
			</button>
			<div className='px-3.5'>
				<div
					ref={sliderRef}
					className='relative z-0 grid h-full w-full snap-mandatory auto-cols-[12rem] grid-flow-col gap-4 overflow-y-hidden overflow-x-scroll overscroll-x-contain scroll-smooth whitespace-nowrap scrollbar-none'
				>
					{data!.map((item) => (
						<SliderCard key={item.id} show={item} />
					))}
				</div>
			</div>
			<button
				onClick={handleNextClick}
				className={cn(
					'duration-250 absolute right-0 top-1/2 z-10 inline-flex items-center justify-center rounded border border-solid border-white/70 bg-brand-black3/40 px-3 py-5 text-2xl transition-all ease-out',
					!showNextButton ? 'pointer-events-none opacity-0' : 'opacity-100 hover:text-brand-yellow'
				)}
				aria-label='Next Page'
			>
				<RightArrow />
			</button>
		</div>
	)
}

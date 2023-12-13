'use client'

import { Fragment, useState } from 'react'
import { HiChevronRight } from 'react-icons/hi'

import { cn } from '@/utils/cn'
import { SliderImage } from './SliderImage'

type ImagesSliderProps = Readonly<{
	images: string[]
}>

export const ImagesSlider = ({ images }: ImagesSliderProps) => {
	const [currentImage, setCurrentImage] = useState<number>(0)

	const length = images.length

	const nextSlide = () => {
		if (currentImage !== length - 1) {
			setCurrentImage(currentImage + 1)
		}
	}

	const prevSlide = () => {
		if (currentImage !== 0) {
			setCurrentImage(currentImage - 1)
		}
	}

	if (!Array.isArray(images) || images.length <= 0) {
		return null
	}

	return (
		<section className='relative z-0 items-center justify-center scrollbar-none' aria-live='polite'>
			<button
				onClick={prevSlide}
				className={cn(
					'absolute left-5 top-1/2 z-10 h-10 w-10 rotate-180 items-center justify-center rounded-full p-2 text-8xl',
					length <= 1 ? 'hidden' : 'flex',
					currentImage > 0 ? 'opacity-100 hover:bg-slate-100' : 'cursor-not-allowed opacity-50'
				)}
				disabled={currentImage === 0}
			>
				<HiChevronRight />
			</button>
			<div className='relative'>
				{images.map((image, index) => {
					return (
						<Fragment key={index}>
							{currentImage === index && <SliderImage image={image} index={index} />}
						</Fragment>
					)
				})}
			</div>
			<button
				onClick={nextSlide}
				className={cn(
					'absolute right-5 top-1/2 z-10 h-10 w-10 items-center justify-center rounded-full p-2 text-8xl',
					length <= 1 ? 'hidden' : 'flex',
					currentImage < length - 1 ? 'opacity-100 hover:bg-slate-100' : 'cursor-not-allowed opacity-50'
				)}
				aria-label='Next Image'
				disabled={currentImage === length - 1}
			>
				<HiChevronRight />
			</button>
		</section>
	)
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiChevronRight } from 'react-icons/hi'

type ImagesSliderProps = Readonly<{
	images: string[]
}>

export const ImagesSlider = ({ images }: ImagesSliderProps) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const handlePrevImg = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1))
	}

	const handleNextImg = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
	}

	return (
		<div className='relative'>
			<div className='relative h-[80] w-[80]' style={{ position: 'relative' }}>
				<Image
					// @ts-expect-error: todo write fail case
					src={images[currentImageIndex]}
					alt='Slide image'
					className='absolute inset-0 w-full -translate-y-4 object-cover'
					fill
					style={{
						position: 'absolute',
						height: '100%',
						width: '100%',
						inset: '0px',
						objectFit: 'cover',
						color: 'transparent',
					}}
				/>
			</div>

			<button
				onClick={handlePrevImg}
				className='absolute inset-y-1/2 left-5 flex h-10 w-10 translate-y-[-50%] rotate-180 items-center justify-center rounded-full bg-white/20 hover:bg-white'
			>
				<HiChevronRight size='1.25rem' />
			</button>

			<button
				onClick={handleNextImg}
				className='absolute inset-y-1/2 right-5 flex h-10 w-10 translate-y-[-50%] items-center justify-center rounded-full bg-white/20 hover:bg-white'
			>
				<HiChevronRight size='1.25rem' />
			</button>
		</div>
	)
}

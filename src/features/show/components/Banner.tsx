'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

export const SliderData = [
	{
		image:
			'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
	},
	{
		image:
			'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	},
	{
		image:
			'https://images.unsplash.com/photo-1446707052533-0e1d48e08aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	},
	{
		image:
			'https://images.unsplash.com/photo-1546687307-88d0e10fe96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80',
	},
	{
		image:
			'https://images.unsplash.com/photo-1589555237794-bc9af923dc7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	},
]

interface Props {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	slides: any
}

export const Banner = ({ slides }: Props) => {
	const [current, setCurrent] = useState(0)
	const length = slides.length

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null
	}

	return (
		<div id='gallery' className='mx-auto max-w-[1240px]'>
			<h1 className='p-4 py-0 text-center text-2xl font-bold'>Gallery</h1>
			<div className='relative flex justify-center p-4'>
				{SliderData.map((slide, index) => {
					return (
						<div key={index} className={index === current ? 'opacity-[1] ease-in' : 'opacity-0'}>
							<FaArrowCircleLeft
								onClick={prevSlide}
								className='absolute left-[30px] top-[50%] z-[2] cursor-pointer select-none text-white/10 hover:text-white/70'
								size={50}
							/>
							{index === current && (
								<Image src={slide.image} alt='/' width='1440' height='600' objectFit='cover' />
							)}
							<FaArrowCircleRight
								onClick={nextSlide}
								className='absolute right-[30px] top-[50%] z-[2] cursor-pointer select-none text-white/10 hover:text-white/70'
								size={50}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

import BlurImage from '@/components/BlurImage'
import { cn } from '../../utils/cn'

type SliderImageProps = Readonly<{
	image: string
	index: number
}>

export const SliderImage = ({ index, image }: SliderImageProps) => {
	return (
		<div
			role='group'
			aria-roledescription='image slide'
			aria-live='polite'
			aria-label={`Image ${index + 1}`}
			className={cn('relative h-[32rem] w-full')}
			key={index}
		>
			<BlurImage
				src={image}
				alt={`Slider Image ${index}`}
				fill
				priority
				sizes='50vw, (min-width: 480px) 34vw, (min-width: 600px) 26vw, (min-width: 1024px) 16vw, (min-width: 1280px) 16vw'
				className='absolute inset-0 object-cover'
			/>
		</div>
	)
}

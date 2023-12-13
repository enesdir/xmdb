import { IconBaseProps } from 'react-icons'

export const Ribbon = (props: IconBaseProps) => {
	return (
		<svg
			{...props}
			viewBox='0 0 32 42'
			width='32px'
			height='42px'
			xmlns='http://www.w3.org/2000/svg'
			role='presentation'
			className=' transition-[stroke] delay-150 duration-200 ease-in-out'
		>
			<polygon
				className='fill-black/[0.75] stroke-black/80'
				fill='#000000'
				points='32 0 0 0 0 42 16.19578366 32.59610617 32 42'
			></polygon>
			<polygon
				points='32 0 0 0 0 42 16.19578366 32.59610617 32 42'
				className='fill-black/30 opacity-0 hover:opacity-100 '
			></polygon>
			<polygon
				points='32 42 32 44 16.19578366 35.39410617 0 44 0 42 16.19578366 32.59610617'
				className='fill-black/30 opacity-0'
			></polygon>
		</svg>
	)
}

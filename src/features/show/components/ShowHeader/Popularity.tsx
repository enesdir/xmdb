import {
	BsArrowDownShort,
	BsArrowUpShort,
	BsDot,
	BsGraphDownArrow,
	BsGraphUp,
	BsGraphUpArrow,
} from 'react-icons/bs'

const UpScoreComponent: React.FC<Omit<PopularityProps, 'rating'>> = ({ score }) => (
	<>
		<BsGraphUpArrow color='green' className='text-lg md:text-2xl' />
		<span className='text-sm font-medium text-gray-800 dark:text-gray-600 md:text-xl'>{score}</span>
		<BsArrowUpShort color='gray' className='text-sm md:text-2xl' />
	</>
)

const DownScoreComponent: React.FC<Omit<PopularityProps, 'rating'>> = ({ score }) => (
	<>
		<BsGraphDownArrow color='red' className='text-lg md:text-2xl' />
		<span className='text-sm font-medium text-gray-800 dark:text-gray-600 md:text-xl'>{score}</span>
		<BsArrowDownShort color='gray' className='text-sm md:text-2xl' />
	</>
)

const EqualScoreComponent: React.FC<Omit<PopularityProps, 'rating'>> = ({ score }) => (
	<>
		<BsGraphUp color='gray' className='text-lg md:text-2xl' />
		<span className='text-sm font-medium text-gray-800 dark:text-gray-600 md:text-xl'>{score}</span>
		<BsDot color='gray' className='text-sm md:text-2xl' />
	</>
)
type PopularityProps = { score: number; rating: number }
export const Popularity = ({ score, rating }: PopularityProps) => {
	return (
		<div className='flex text-center tracking-wider'>
			{score > 100 && <UpScoreComponent score={score} />}
			{score < 100 && <DownScoreComponent score={score} />}
			{score === 100 && <EqualScoreComponent score={score} />}
			<span className='text-xs opacity-50 md:text-lg'>{rating}</span>
		</div>
	)
}

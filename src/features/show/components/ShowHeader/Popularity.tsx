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
		<BsGraphUpArrow color='green' size={22} />
		<span className='text-xl font-medium text-gray-800 dark:text-white'>{score}</span>
		<BsArrowUpShort color='gray' size={22} />
	</>
)

const DownScoreComponent: React.FC<Omit<PopularityProps, 'rating'>> = ({ score }) => (
	<>
		<BsGraphDownArrow color='red' size={22} />
		<span>{score}</span>
		<BsArrowDownShort color='gray' size={22} />
	</>
)

const EqualScoreComponent: React.FC<Omit<PopularityProps, 'rating'>> = ({ score }) => (
	<>
		<BsGraphUp color='gray' size={22} />
		<span className='text-sm tracking-wider opacity-50'>{score}</span>
		<BsDot color='gray' size={22} />
	</>
)
type PopularityProps = { score: number; rating: number }
export const Popularity = ({ score, rating }: PopularityProps) => {
	return (
		<div className='flex tracking-wider'>
			{score > 100 && <UpScoreComponent score={score} />}
			{score < 100 && <DownScoreComponent score={score} />}
			{score === 100 && <EqualScoreComponent score={score} />}
			<span className='text-sm opacity-50'>{rating}</span>
		</div>
	)
}

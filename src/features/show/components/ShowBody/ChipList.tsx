import { Chip } from '@/components/Chip/'

type genreNames =
	| 'Sci-Fi'
	| 'Action'
	| 'Comedy'
	| 'Thriller'
	| 'Drama'
	| 'Horror'
	| 'Romance'
	| 'Adventure'
	| 'Fantasy'
	| 'Mystery'

type ChipListProps = Readonly<{
	genres: genreNames[]
}>
export const ChipList = ({ genres }: ChipListProps) => {
	const renderGenres = genres.map((genre) => <Chip href={`shows/${genre}`} key={genre} text={genre} />)
	return <div className='relative inline-flex flex-wrap'>{renderGenres}</div>
}

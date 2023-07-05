import { TbMovieOff } from 'react-icons/tb'

export const EmptyShowsAlert = () => (
	<div className='flex flex-col items-center gap-y-2 text-3xl'>
		<TbMovieOff />
		<h2 className='text-xl'>There are not any shows yet</h2>
	</div>
)

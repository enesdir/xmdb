import type { RouterOutputs } from '@/trpc/shared'

type ShowDetailsProps = Readonly<{
	show: NonNullable<RouterOutputs['tmdb']['getShowById']> | NonNullable<RouterOutputs['tmdb']['getMovieById']>
}>

export const ShowDetails = ({ show }: ShowDetailsProps) => (
	<>
		<h3 className='font-medium'>
			{/* @ts-expect-error: do better types */}
			{show.original_title ?? show.title ?? show.name ?? show.original_name ?? 'Title'}
		</h3>
		<div className='mt-0.5 whitespace-pre-line break-all text-justify'>{show.overview}</div>
	</>
)

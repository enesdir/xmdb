import type { RouterOutputs } from '@/trpc/shared'

type ShowCtaProps = Readonly<{
	show: NonNullable<RouterOutputs['tmdb']['getShowById']> | NonNullable<RouterOutputs['tmdb']['getMovieById']>
}>

export const ShowCta = ({ show }: ShowCtaProps) => (
	<div className='flex items-center justify-between gap-x-3 md:justify-start'>
		<h2 className='truncate text-lg font-medium'>
			{/* @ts-expect-error: do better types */}
			{show.original_title ?? show.title ?? show.name ?? show.original_name ?? 'Title'}
		</h2>
		{/* <FollowButton user={user} /> */}
	</div>
)

import { Show } from '@/server/modules/shows/showsSchemas'

type ShowCtaProps = Readonly<{
	show: Show
}>

export const ShowCta = ({ show }: ShowCtaProps) => (
	<div className='flex items-center justify-between gap-x-3 sm:justify-start'>
		<h2 className='truncate text-lg font-medium'>{show.title}</h2>
		{/* <FollowButton user={user} /> */}
	</div>
)

import { Show } from '@/server/modules/shows/showsSchemas'

type ShowCtaProps = Readonly<{
	show: Show
}>

export const ShowCta = ({ show }: ShowCtaProps) => (
	<div className='flex items-center justify-between gap-x-3 sm:justify-start'>
		<h2 className='overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium'>{post.title}</h2>
		{/* <FollowButton user={user} /> */}
	</div>
)

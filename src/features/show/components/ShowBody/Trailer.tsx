import type { Show } from '@/server/modules/shows/showsSchemas'

type TrailerProps = Readonly<{
	show: Show
}>
export const Trailer = ({ show }: TrailerProps) => {
	return <div className='h-40 w-full'>Trailer</div>
}

import type { Show } from '@/server/modules/shows/showsSchemas'

type TrailerProps = Readonly<{
	show: Show
}>
export const Trailer = ({ show }: TrailerProps) => {
	return <div>Trailer</div>
}

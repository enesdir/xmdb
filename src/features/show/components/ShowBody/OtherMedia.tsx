import type { Show } from '@/server/modules/shows/showsSchemas'

type OtherMediaProps = Readonly<{
	show: Show
}>
export const OtherMedia = ({ show }: OtherMediaProps) => {
	return (
		<div className='flex  h-full w-full flex-row lg:flex-col'>
			<div className='grow bg-teal-100 '>35 videos</div>
			<div className='grow bg-red-100'>99+photos</div>
		</div>
	)
}

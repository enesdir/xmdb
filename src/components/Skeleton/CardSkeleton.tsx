import { Skeleton } from './Skeleton'

export const CardSkeleton = () => {
	return (
		<div className='flex rounded-md bg-brand-gray3 transition-transform active:scale-95'>
			<span className='text-lg'>
				<Skeleton className='h-96 w-72' />
			</span>
		</div>
	)
}

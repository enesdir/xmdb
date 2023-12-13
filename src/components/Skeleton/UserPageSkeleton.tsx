import { Skeleton } from '@/components/Skeleton'

export const UserPageSkeleton = () => (
	<div className='flex h-full w-full flex-col items-center'>
		<div className='flex w-full flex-col items-center '>
			<div className='w-full bg-brand-black'>
				<div className='relative mx-auto my-0 mt-4 w-full items-center border-none p-0 text-base lg:max-w-screen-lg xl:max-w-screen-xl'>
					<div className='flex w-full items-center gap-x-4 bg-brand-black py-5'>
						<Skeleton className='h-36 w-36 rounded-full' />
						<div className='flex flex-col gap-y-3'>
							<Skeleton className='h-10 w-32' />
							<div className='flex w-full items-center justify-between gap-x-3'>
								<Skeleton className='h-8 w-36' />
								<Skeleton className='h-8 w-32' />
								<Skeleton className='h-8 w-32' />
							</div>
							<div className='flex w-full items-center justify-between gap-x-3'>
								<Skeleton className='h-8 w-36' />
								<Skeleton className='h-8 w-32' />
								<Skeleton className='h-8 w-32' />
							</div>
							<Skeleton className='h-8 w-56' />
						</div>
					</div>
				</div>
			</div>
			<div className='relative mx-auto my-0 mt-4 w-full items-center border-none p-0 text-base lg:max-w-screen-lg xl:max-w-screen-xl'>
				<div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4'>
					{Array.from({ length: 12 }).map((_, i) => (
						<Skeleton
							className='h-96 w-72 rounded-md bg-brand-gray3 transition-transform active:scale-95'
							key={i}
						/>
					))}
				</div>
			</div>
		</div>
	</div>
)

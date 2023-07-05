import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Button } from '@/components/'
import type { Show } from '@/server/modules/shows/showsSchemas'
import { UserControls } from './UserControls'

type ShowHeaderProps = Readonly<{
	show: Show
}>

export const ShowHeader = ({ show }: ShowHeaderProps) => {
	return (
		<div className=''>
			<UserControls show={show} />
			<div className='flex w-full justify-between py-2'>
				<div className='flex flex-col justify-start'>
					<span className='text-sm uppercase text-gray-900'>{show.title}</span>
					<div className='flex flex-row pt-2 text-lg'>
						<p className='rounded-xl font-semibold'>
							<span className='text-sm opacity-50'>{show.media_type}</span>
							<span className='text-center text-lg'>.</span>
							<span className='text-sm opacity-50'>{'pg'}</span>
						</p>
					</div>
				</div>
				<div className='flex flex-row items-center space-x-1'>
					<div className='flex flex-col items-center justify-center'>
						<span className='text-sm uppercase text-gray-400'>Rating</span>
						<div className='flex flex-row items-center justify-center text-lg'>
							<Button icon={<AiFillStar />} variant='text' className='bg-transparent hover:bg-blue-400'>
								<div className='flex items-center justify-end'>
									<p className=' inline-block whitespace-nowrap rounded-xl font-semibold leading-tight'>
										<span className='text-lg'>9.0</span>
										<span className='text-sm opacity-50'>
											{'/'}
											{'10'}
										</span>
									</p>
								</div>
							</Button>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<span className='text-sm uppercase text-gray-400'>Your Rating</span>
						<div className='flex flex-row items-center justify-center text-lg'>
							<Button icon={<AiOutlineStar />} variant='text' className='bg-transparent hover:bg-blue-400'>
								<div className='flex items-center justify-end'>
									<p className=' inline-block whitespace-nowrap rounded-xl font-semibold leading-tight'>
										<span className='text-lg'>Rate</span>
									</p>
								</div>
							</Button>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<span className='text-sm uppercase text-gray-400'>Popularity</span>
						<div className='flex flex-row items-center justify-center text-lg'>
							<Button icon={<AiFillStar />} variant='text' className='bg-transparent hover:bg-blue-400'>
								<div className='flex items-center justify-end'>
									<p className=' inline-block whitespace-nowrap rounded-xl font-semibold leading-tight'>
										<span className='text-lg'>9.0</span>
										<span className='text-sm opacity-50'>
											{'/'}
											{'10'}
										</span>
									</p>
								</div>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

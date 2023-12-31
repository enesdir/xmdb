import Image from 'next/image'
import Link from 'next/link'
import { BiCameraMovie } from 'react-icons/bi'

import { RouterOutputs } from '@/trpc/shared'

type ShowCardProps = Readonly<{
	show: NonNullable<RouterOutputs['shows']['getById']>
}>

export const ShowCard = ({ show: { description, images, title, id, author } }: ShowCardProps) => (
	<>
		<article className='group relative mx-auto flex w-full max-w-sm overflow-hidden rounded-lg'>
			<div className='relative overflow-hidden rounded-xl text-white shadow-lg transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl'>
				<Link href={`/user/${author.username}/show/${id}`}>
					<div className='absolute inset-0 z-10 bg-gradient-to-t from-black via-gray-900 to-transparent transition duration-300 ease-in-out'></div>
					<div className='group relative z-10 cursor-pointer space-y-6 px-6 pt-10'>
						<div className='w-full'>
							<div className='h-32 md:h-40'></div>
							<div className='space-y-6'>
								<div className='flex flex-col space-y-1'>
									<h3 className='text-2xl font-bold text-white'>{title}</h3>
									<div className='mb-0 text-lg text-gray-400'>Slogan</div>
								</div>
								<div className='flex flex-row justify-between space-x-4'>
									<div className='flex flex-col'>
										<div id='popularity'>440.052</div>
										<div className='text-sm text-gray-400'>Popularity:</div>
									</div>
									<div className=' flex flex-col'>
										<div id='release'>2023-09-15</div>
										<div className='text-sm text-gray-400'>Release date:</div>
									</div>
									<div className='flex flex-col'>
										<div id='release'>155 min</div>
										<div className='text-sm text-gray-400'>Runtime:</div>
									</div>
								</div>
								<div id='overview' className=' flex flex-col'>
									<div className='flex flex-col'></div>
									<div className='mb-2 text-xs text-gray-400'>Overview:</div>
									<p className='mb-6 text-xs text-gray-100'>{description}</p>
								</div>
							</div>
						</div>
					</div>
					<Image
						// @ts-expect-error: todo write fail case
						src={images[0]}
						alt={title}
						className='absolute inset-0 w-full -translate-y-4 object-cover'
						fill
					/>
				</Link>
				<div className='relative z-10 flex flex-row space-x-4 pb-10'>
					<Link
						className='mx-auto flex items-center rounded-full bg-red-500 px-4 py-2 text-white hover:bg-red-700'
						href={`/user/${author.username}/show/${String(id)}`}
					>
						<BiCameraMovie />
						<div className='ml-2 text-sm text-white'>Go to the show</div>
					</Link>
				</div>
			</div>
		</article>
	</>
)

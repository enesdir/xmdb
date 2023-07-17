import Link from 'next/link'
import { BaseLinkIcon } from '@/components/BaseLinkIcon'
import type { Show } from '@/server/modules/shows/showsSchemas'
import { Trends } from '../ShowHeader/Trends'
import { ChipList } from './ChipList'
import { ShowCta } from './ShowCta'
import { ShowDetails } from './ShowDetails'
import { ShowStatistics } from './ShowStatistics'

type ShowBodyProps = Readonly<{
	show: Show
}>

export const ShowBody = ({ show }: ShowBodyProps) => {
	return (
		<>
			<div className='mb-4 min-h-[calc(177.6px_+_0.5rem)] border-b pb-4 pl-32 sm:w-2/3 sm:pl-0'>
				<div className='mx-auto flex w-full flex-col items-center sm:flex-row sm:items-start'>
					<section className='grow space-y-4 '>
						<ChipList genres={['Action', 'Adventure', 'Sci-Fi']} />
						<ShowCta show={show} />
						<ShowStatistics show={show} />
						<ShowDetails show={show} />
					</section>
				</div>
			</div>
			<div className='sm:w-3/12'>
				<Trends
					trends={{
						rate: 7.9,
						numberOfVoters: Math.floor((1 + Math.random()) * 1000000),
						popularity: { score: 96, rating: 50, trending: 'up' },
					}}
					className='flex md:hidden'
				/>
				<ul className='mt-2 inline-flex list-none flex-wrap items-center text-left text-blue-600/95'>
					<li className='mr-4 inline-block text-center text-inherit' role='presentation'>
						<Link
							href='#'
							role='button'
							className='m-auto inline-block border-none bg-none py-2 sm:inline-flex'
							tabIndex={0}
							aria-disabled={false}
						>
							<span className='text-center sm:inline-flex'>
								<span className='block'>964</span>
								<span>User reviews</span>
							</span>
						</Link>
					</li>
					<li className='mr-4 inline-block text-center text-inherit ' role='presentation'>
						<Link
							href='#'
							role='button'
							className='m-auto inline-flex border-none bg-none py-2 no-underline'
							tabIndex={0}
							aria-disabled={false}
						>
							<span className='text-center sm:inline-flex'>
								<span className='block'>188</span>
								<span> Critic reviews</span>
							</span>
						</Link>
					</li>
					<li className='mr-0 inline-block text-center text-inherit' role='presentation'>
						<Link
							href='#'
							role='button'
							className='m-auto inline-flex border-none bg-none py-2 no-underline'
							tabIndex={0}
							aria-disabled={false}
						>
							<span className='inline-flex text-center'>
								<span className='block'>
									<span className='bg-[#BB8A00] p-0.5'>52</span>
								</span>
								<span> Metascore</span>
							</span>
						</Link>
					</li>
				</ul>
				<li
					role='presentation'
					className='mt-2 block min-h-[3rem] border-t-2 border-white/20 pb-2  sm:hidden'
				>
					<div className='relative'>
						<BaseLinkIcon
							className='m-auto flex-wrap text-base font-semibold text-blue-600/95 hover:underline'
							label='XMDb Pro'
							href='#'
						>
							See more at XMDb<span className=''>Pro </span>
						</BaseLinkIcon>
					</div>
				</li>
			</div>
		</>
	)
}

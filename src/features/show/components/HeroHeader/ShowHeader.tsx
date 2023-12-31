import Link from 'next/link'
import { BsDot } from 'react-icons/bs'

import { List, ListItem } from '@/components/List'
import { Title } from '@/components/Title'
import { formatMinutes } from '@/features/show/utils/formatMinutes'
import { Trends } from '../Trends/Trends'

import type { RouterOutputs } from '@/trpc/shared'

type ShowHeaderProps = Readonly<{
	show: NonNullable<RouterOutputs['shows']['getById']>
}>

export const ShowHeader = ({ show }: ShowHeaderProps) => {
	return (
		<div className='flex w-full items-center justify-between px-4 opacity-100'>
			<div className='min-h-[4rem] tracking-brand-wide'>
				<Title className='text-3xl font-normal uppercase tracking-[0.0735em] text-white md:text-3xl md:tracking-[0.00735em]'>
					{show.title}
				</Title>
				<List className='mb-2 flex flex-row justify-start -space-x-1 pt-2 text-center text-sm text-white/70 lg:mb-0'>
					<ListItem>
						<Link href='#'>{show.media_type}</Link>
					</ListItem>
					<ListItem>
						<span>
							<BsDot className='text-xl' />
						</span>
					</ListItem>
					<Link href='#'>{'PG-13'}</Link>
					<ListItem>
						<span>
							<BsDot className='text-xl' />
						</span>
					</ListItem>
					<ListItem>
						<span>{formatMinutes(Math.floor(1 + Math.random() * 120))}</span>
					</ListItem>
				</List>
			</div>
			<Trends
				trends={{
					rate: 7.9,
					numberOfVoters: Math.floor((1 + Math.random()) * 1000000),
					popularity: { score: 96, rating: 50, trending: 'up' },
				}}
				className='hidden lg:flex'
			/>
		</div>
	)
}

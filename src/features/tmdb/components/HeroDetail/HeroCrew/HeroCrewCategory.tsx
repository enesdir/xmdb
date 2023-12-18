import Link from 'next/link'
import { AiOutlineRight } from 'react-icons/ai'

import { ListItem } from '@/components/List'
import { cn } from '@/utils/cn'
import { Crew } from './Crew'

import type { CrewCategoryType } from '@/features/show/types/crewCategoryType'

type HeroCrewCategoryProps = {
	category: CrewCategoryType
}
export const HeroCrewCategory = ({ category: { link, name, crew } }: HeroCrewCategoryProps) => {
	const categoryTypeLink: boolean = link === ''
	return (
		<ListItem
			className={cn('border-t border-solid border-white/20 text-white', {
				'relative cursor-pointer pr-brand-s-1': categoryTypeLink,
			})}
			variant='default'
		>
			{categoryTypeLink ? (
				<Link
					// @ts-expect-error todo
					href={category.link}
					className='relative z-[1] max-w-full shrink-0 border-[none] pr-3 text-start font-medium leading-5 tracking-[0.00937em] text-inherit hover:text-white/70'
				>
					{name}
				</Link>
			) : (
				<span className='max-w-full shrink-0 border-[none] pr-3 text-start font-medium leading-5 tracking-[0.00937em] text-inherit'>
					{name}
				</span>
			)}
			<Crew crew={crew} />
			{categoryTypeLink && (
				<Link
					// @ts-expect-error todo
					href={category.link}
					className='absolute right-0 top-0 z-0 flex h-full w-full cursor-pointer items-center justify-end border-[none] p-0 text-white hover:text-brand-yellow'
				>
					<AiOutlineRight />
				</Link>
			)}
		</ListItem>
	)
}

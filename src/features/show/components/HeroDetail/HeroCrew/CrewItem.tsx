import Link from 'next/link'

import { ListItem } from '@/components/List'
import { cn } from '@/utils/cn'

import type { CrewType } from '@/features/show/types/crewType'

type CrewItemProps = { isNotZero: boolean } & { crew: CrewType }
export const CrewItem = ({ isNotZero, crew: { id, name } }: CrewItemProps) => {
	return (
		<ListItem
			className={cn({
				'before:mx-2 before:mb-[0.2rem] before:mt-0 before:inline-block before:rounded-[50%] before:bg-current before:p-px before:align-middle before:text-base before:leading-[0.5rem] before:content-[""]':
					isNotZero,
			})}
			variant='inline'
		>
			<Link
				href={`/name/${id}`}
				className='bg-transparent text-[--brand-blue] hover:underline focus:underline'
			>
				{name}
			</Link>
		</ListItem>
	)
}

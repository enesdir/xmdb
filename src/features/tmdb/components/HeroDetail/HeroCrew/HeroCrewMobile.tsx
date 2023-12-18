'use client'

import { useBoolean } from '@/hooks/useBoolean'
import { cn } from '@/utils/cn'
import { CrewMobileButton } from './CrewMobileButton'
import { HeroCrew } from './HeroCrew'

import type { CrewCategoryType } from '@/features/show/types/crewCategoryType'

type HeroCrewProps = Readonly<{
	crewCategories: CrewCategoryType[]
}>
export const HeroCrewMobile = ({ crewCategories }: HeroCrewProps) => {
	const { value, toggle } = useBoolean()

	return (
		<div className='mb-3 block lg:hidden'>
			<div role='presentation'>
				<CrewMobileButton isOpen={value} onClick={toggle} title='Top Credits' />
				<div
					className={cn(
						'overflow-hidden border-b border-solid border-b-transparent',
						value ? 'visible block h-auto border-white/20' : 'invisible h-0'
					)}
					aria-hidden={value}
					aria-expanded={value}
				>
					<HeroCrew crewCategories={crewCategories} />
				</div>
			</div>
		</div>
	)
}

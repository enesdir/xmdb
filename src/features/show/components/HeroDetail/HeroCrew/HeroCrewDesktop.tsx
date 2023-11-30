import { HeroCrew } from './HeroCrew'

import type { CrewCategoryType } from '@/features/show/types/crewCategoryType'

type HeroCrewProps = Readonly<{
	crewCategories: CrewCategoryType[]
}>
export const HeroCrewDesktop = ({ crewCategories }: HeroCrewProps) => {
	return (
		<div className='hidden lg:block'>
			<div>
				<HeroCrew crewCategories={crewCategories} />
			</div>
		</div>
	)
}

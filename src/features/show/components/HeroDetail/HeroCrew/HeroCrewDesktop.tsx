import type { CrewCategoryType } from '@/features/show/types/crewCategoryType'

import { HeroCrew } from './HeroCrew'

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

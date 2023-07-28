import type { CrewCategoryType } from '@/features/show/types/crewCategoryType'

import { List } from '@/components/List'
import { HeroCrewCategory } from './HeroCrewCategory'

type HeroCrewProps = Readonly<{
	crewCategories: CrewCategoryType[]
}>
export const HeroCrew = ({ crewCategories }: HeroCrewProps) => {
	const renderCategories = crewCategories.map((crewCategory, i) => (
		<HeroCrewCategory category={crewCategory} key={i} />
	))
	return <List variant='default'>{renderCategories}</List>
}

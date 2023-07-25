import { List } from '@/components/List'
import { CrewCategoryType } from '@/features/show/types/crewCategoryType'
import { HeroCrewCategory } from './HeroCrewCategory'

type HeroCrewProps = Readonly<{
	crewCategories: CrewCategoryType[]
}>
export const HeroCrew = ({ crewCategories }: HeroCrewProps) => {
	const renderCategories = crewCategories.map((crewCategory, i) => (
		<HeroCrewCategory category={crewCategory} key={i} />
	))
	return (
		<div className='hidden lg:block'>
			<div>
				<List variant='default'>{renderCategories}</List>
			</div>
		</div>
	)
}

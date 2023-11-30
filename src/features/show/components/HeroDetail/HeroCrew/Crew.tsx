import { List } from '@/components/List'
import { CrewType } from '@/features/show/types/crewType'
import { CrewItem } from './CrewItem'

type CrewProps = {
	crew: CrewType[]
}
export const Crew = ({ crew }: CrewProps) => {
	const renderCrew = crew.map((person, i) => <CrewItem key={i} isNotZero={i > 0} crew={person} />)
	return (
		<div className='relative z-[1] grow'>
			<List className='inline text-base font-normal leading-6 tracking-[0.03125em]  ' variant='inline'>
				{renderCrew}
			</List>
		</div>
	)
}

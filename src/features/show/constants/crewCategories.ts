import type { CrewCategoryType } from '../types/crewCategoryType'

export const crewCategories: CrewCategoryType[] = [
	{ link: undefined, name: 'Director', crew: [{ id: '1', name: 'Director name' }] },
	{
		link: '#',
		name: 'Writers',
		crew: [
			{ id: '2', name: 'Writer name' },
			{ id: '3', name: 'Writer name' },
		],
	},
	{
		link: '#',
		name: 'Stars',
		crew: [
			{ id: '4', name: 'Star name' },
			{ id: '5', name: 'Star name' },
			{ id: '6', name: 'Star name' },
		],
	},
]

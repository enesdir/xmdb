import { Decorator } from '@storybook/react'
import { SearchBarProvider } from '@/providers/SearchBarProvider'

export const withSearchBarProvider: Decorator = (StoryFn) => {
	return (
		<SearchBarProvider>
			<StoryFn />
		</SearchBarProvider>
	)
}

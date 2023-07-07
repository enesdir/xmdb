import type { Preview } from '@storybook/react'
import '~/src/app/global.css'
import { withSessionProvider } from './withSessionProvider'

export const decorators = [withSessionProvider]

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview

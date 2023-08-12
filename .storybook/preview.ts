import type { Preview } from '@storybook/react'

import '~/src/styles/global.css'

import { withSearchBarProvider } from './withSearchBarProvider'
import { withSessionProvider } from './withSessionProvider'
import { withTRPCProvider } from './withTRPCProvider'

export const decorators = [withSessionProvider, withTRPCProvider, withSearchBarProvider]

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

import type { Preview } from '@storybook/react'
import '~/src/app/global.css'
import { withSessionProvider } from './withSessionProvider'
import { withTRPCProvider } from './withTRPCProvider'

export const decorators = [withSessionProvider, withTRPCProvider]

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

import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	logLevel: 'error',
	staticDirs: ['../public'],
	core: {
		disableTelemetry: true, // 👈 Disables telemetry
		disableWhatsNewNotifications: true,
	},
}

export default config

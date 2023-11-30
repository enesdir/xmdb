import { Trends } from './Trends'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Main/Trends',
	component: Trends,
	args: {
		trends: {
			rate: 7.9,
			numberOfVoters: Math.floor((1 + Math.random()) * 1000000),
			popularity: { score: 96, rating: 50, trending: 'up' },
		},
	},
} satisfies Meta<typeof Trends>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

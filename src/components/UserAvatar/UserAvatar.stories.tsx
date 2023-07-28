import type { Meta, StoryObj } from '@storybook/react'

import { UserAvatar } from './UserAvatar'

const meta = {
	title: 'UI/UserAvatar',
	component: UserAvatar,
} satisfies Meta<typeof UserAvatar>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {
	args: {
		user: {
			name: 'storybook',
			image: '/path-to-image',
		},
	},
}

export const Icon: Story = {
	args: {
		icon: true,
		user: {
			name: 'storybook',
		},
	},
}

export const Text: Story = {
	args: {
		icon: false,
		user: {
			name: 'storybook',
		},
	},
}

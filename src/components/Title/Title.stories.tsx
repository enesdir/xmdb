import { Title } from './Title'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'UI/Title/Title',
	component: Title,
	args: {
		children: 'Test Description',
	},
} satisfies Meta<typeof Title>

export default meta

type Story = StoryObj<typeof meta>
export const H2: Story = {
	args: {
		as: 'h2',
	},
}
export const H3: Story = {
	args: {
		as: 'h3',
	},
}
export const H4: Story = {
	args: {
		as: 'h4',
	},
}
export const H5: Story = {
	args: {
		as: 'h5',
	},
}
export const H6: Story = {
	args: {
		as: 'h6',
	},
}
export const Default: Story = {}

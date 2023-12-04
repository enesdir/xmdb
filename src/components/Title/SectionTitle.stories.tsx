import { SectionTitle } from './SectionTitle'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'UI/Title/SectionTitle',
	component: SectionTitle,
	args: {
		title: 'Test Title',
		description: 'Test Description',
		href: '#',
	},
} satisfies Meta<typeof SectionTitle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

import type { Meta, StoryObj } from '@storybook/react'

import { CustomLink } from './CustomLink'

const meta = {
	title: 'UI/CustomLink',
	component: CustomLink,
	args: {
		children: 'Example Link',
		variant: 'classic',
	},
} satisfies Meta<typeof CustomLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		href: '#',
	},
}

export const Icon: Story = {
	args: {
		hasExternalIcon: true,
		href: 'https://duckduckgo.com',
		variant: 'classic',
	},
}

export const Modern: Story = {
	args: {
		href: '#',
		variant: 'modern',
	},
}
export const Button: Story = {
	args: {
		href: '#',
		variant: 'button',
	},
}

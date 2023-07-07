import type { Meta, StoryObj } from '@storybook/react'
import { FileButton } from './FileButton'

const meta = {
	title: 'UI/FileButton',
	component: FileButton,
	args: {
		children: 'Example',
	},
} satisfies Meta<typeof FileButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Fill: Story = {
	args: {
		fill: true,
	},
}

export const Icon: Story = {
	args: {
		icon: true,
	},
}

export const Primary: Story = {
	args: {
		variant: 'primary',
	},
}

export const Danger: Story = {
	args: {
		variant: 'danger',
	},
}

export const Text: Story = {
	args: {
		variant: 'text',
	},
}
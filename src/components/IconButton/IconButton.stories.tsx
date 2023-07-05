import type { Meta, StoryObj } from '@storybook/react'
import { AiOutlineSmile } from 'react-icons/ai'
import { IconButton } from './IconButton'

const meta = {
	title: 'UI/IconButton',
	component: IconButton,
	args: {
		label: 'Click me!',
		icon: <AiOutlineSmile />,
	},
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Danger: Story = {
	args: {
		variant: 'danger',
	},
}

export const Disabled: Story = {
	args: {
		disabled: true,
	},
}

import type { Meta, StoryObj } from '@storybook/react'
import { ErrorMessage } from './ErrorMessage'

const meta = {
	title: 'UI/ErrorMessage',
	component: ErrorMessage,
	args: {
		message: 'Example error!',
	},
} satisfies Meta<typeof ErrorMessage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

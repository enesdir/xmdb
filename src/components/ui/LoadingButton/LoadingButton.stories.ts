import type { Meta, StoryObj } from '@storybook/react'
import { LoadingButton } from './LoadingButton'

const meta = {
	title: 'LoadingButton',
	component: LoadingButton,
	args: {
		children: 'Example',
		isLoading: true,
	},
} satisfies Meta<typeof LoadingButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

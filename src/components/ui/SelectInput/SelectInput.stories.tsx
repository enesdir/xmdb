import type { Meta, StoryObj } from '@storybook/react'
import { SelectInput } from './SelectInput'

const meta = {
	title: 'SelectInput',
	component: SelectInput,
	args: {
		children: <option>Select value</option>,
		placeholder: 'Example placeholder',
	},
} satisfies Meta<typeof SelectInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Label: Story = {
	args: {
		label: 'Example input',
	},
}

export const Required: Story = {
	args: {
		label: 'Example input',
		required: true,
	},
}

export const Error: Story = {
	args: {
		error: 'Example error!',
	},
}

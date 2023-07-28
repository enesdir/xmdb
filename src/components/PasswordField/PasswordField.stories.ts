import type { Meta, StoryObj } from '@storybook/react'

import { PasswordField } from './PasswordField'

const meta = {
	title: 'UI/PasswordField',
	component: PasswordField,
	args: {
		placeholder: 'Example placeholder',
	},
} satisfies Meta<typeof PasswordField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

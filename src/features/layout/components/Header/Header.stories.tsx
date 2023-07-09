import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta = {
	title: 'Layout/Header',
	component: Header,
	parameters: {
		backgrounds: {
			default: 'xmdb',
			values: [{ name: 'xmdb', value: '#121212' }],
		},
	},
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

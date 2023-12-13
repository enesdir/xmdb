import { Header } from './Header'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Layout/Header',
	component: Header,
	args: {
		session: { user: { id: '1', name: 'storybook' }, expires: new Date().toISOString() },
	},
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

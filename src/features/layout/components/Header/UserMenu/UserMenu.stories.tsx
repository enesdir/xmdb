import { UserMenu } from './UserMenu'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Layout/UserMenu',
	component: UserMenu,
	args: {
		user: { id: '1', name: 'storybook' },
	},
	parameters: {
		backgrounds: {
			default: 'xmdb',
			values: [{ name: 'xmdb', value: '#121212' }],
		},
	},
} satisfies Meta<typeof UserMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

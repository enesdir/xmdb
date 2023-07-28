import type { Meta, StoryObj } from '@storybook/react'

import { BiAbacus } from 'react-icons/bi'

import { CollapsibleMenu } from './CollasibleMenu'

const meta = {
	title: 'UI/CollapsibleMenu',
	component: CollapsibleMenu,
	args: {
		menu: [
			{
				title: 'Example Category',
				href: '#',
				icon: BiAbacus,
				items: [
					{ title: 'Example Sub Item', href: '#' },
					{ title: 'Example Sub Item', href: '#' },
				],
			},
			{
				title: 'Example Category 2',
				href: '#',
				icon: BiAbacus,
				items: [
					{ title: 'Example Sub Item', href: '#' },
					{ title: 'Example Sub Item', href: '#' },
				],
			},
		],
	},
} satisfies Meta<typeof CollapsibleMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

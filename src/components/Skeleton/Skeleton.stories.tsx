import { Skeleton } from './Skeleton'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'UI/Skeleton/Skeleton',
	component: Skeleton,
	args: {},
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

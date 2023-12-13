import { UserPageSkeleton } from './UserPageSkeleton'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Main/Loading/UserPageSkeleton',
	component: UserPageSkeleton,
	args: {},
} satisfies Meta<typeof UserPageSkeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

import { CardSkeleton } from './CardSkeleton'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'UI/Skeleton/CardSkeleton',
	component: CardSkeleton,
	args: {},
} satisfies Meta<typeof CardSkeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

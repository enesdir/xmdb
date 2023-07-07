import type { Meta, StoryObj } from '@storybook/react'
import { HeroRight } from './HeroRight'

const meta = {
	title: 'Main/HeroRight',
	component: HeroRight,
	args: {},
} satisfies Meta<typeof HeroRight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

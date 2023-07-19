import type { Meta, StoryObj } from '@storybook/react'
//👇 Imports all Header stories
import * as ShowHeroStories from '../ShowHero.stories'
import { ShowHeader } from './ShowHeader'

const meta: Meta<typeof ShowHeader> = {
	title: 'Main/ShowHeader',
	component: ShowHeader,
	args: {
		...ShowHeroStories.default.args,
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

//👇 Imports all Header stories
import * as ShowHeroStories from '../ShowHero.stories'
import { ShowHeader } from './ShowHeader'

import type { Meta, StoryObj } from '@storybook/react'

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

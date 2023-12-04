import { PageContainer } from './PageContainer'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'UI/PageContainer',
	component: PageContainer,
	args: {
		children: (
			<>
				<h1>Hello World!</h1>
				<p>container</p>
			</>
		),
	},
} satisfies Meta<typeof PageContainer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

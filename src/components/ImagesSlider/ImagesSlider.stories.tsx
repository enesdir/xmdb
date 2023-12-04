import { ImagesSlider } from './ImagesSlider'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'UI/ImagesSlider',
	component: ImagesSlider,
	args: {
		images: [
			'https://images.unsplash.com/photo-1701203580497-e49d73574908?q=80',
			'https://images.unsplash.com/photo-1682687981674-0927add86f2b?q=80',
		],
	},
} satisfies Meta<typeof ImagesSlider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

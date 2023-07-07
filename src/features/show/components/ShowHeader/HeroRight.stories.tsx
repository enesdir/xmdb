import type { Meta, StoryObj } from '@storybook/react'
import { HeroRight } from './HeroRight'

const meta = {
	title: 'Main/HeroRight',
	component: HeroRight,
	args: {
		show: {
			title: 'My Series',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in eleifend nibh, vel mattis ipsum. Nunc sed mi arcu. Donec hendrerit non mauris eu porta. Donec tempor tellus sit amet elit sodales fermentum. Pellentesque vel varius massa. Mauris aliquet ante in mi placerat vehicula. Maecenas feugiat vitae risus ut finibus.',
			images: [''],
			id: 1,
			original_title: '',
			overview:
				'Donec hendrerit non mauris eu porta. Donec tempor tellus sit amet elit sodales fermentum. Pellentesque vel varius massa. Mauris aliquet ante in mi placerat vehicula. Maecenas feugiat vitae risus ut finibus.',
			original_language: 'ENGLISH',
			media_type: 'TV',
			adult: true,
			director: '',
			cast: [''],
			statistics: {
				likes: 2,
			},
			author: {
				id: 'user1',
				username: 'user1',
				name: 'User',
				image: '',
			},
			like: true,
			createdAt: '2023',
		},
	},
} satisfies Meta<typeof HeroRight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

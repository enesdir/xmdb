import type { Meta, StoryFn } from '@storybook/react'
import type { DrawerProps } from './Drawer'

import { useState } from 'react'

import { Button } from '@/components/Button/'
import { Drawer } from './Drawer'

const meta = {
	title: 'UI/Drawer',
	component: Drawer,
	args: {
		openFrom: 'left',
	},
} satisfies Meta<typeof Drawer>

export default meta

const { log } = console
const Template: StoryFn<DrawerProps> = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
			<Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} openFrom='left'>
				<Button onClick={log}>Example Button</Button>
			</Drawer>
		</>
	)
}

export const Default = Template.bind({})

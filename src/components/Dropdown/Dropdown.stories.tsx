import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import { AiOutlineSmile } from 'react-icons/ai'
import Dropdown, { DropdownProps } from './Dropdown'

const meta = {
	title: 'UI/Dropdown',
	component: Dropdown,
	subcomponents: {
		'Dropdown.Item': Dropdown.Item,
	},
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>
const { log } = console
const Template: StoryFn<DropdownProps> = (args) => (
	<Dropdown {...args} onClick={log} label='I am a dropdown'>
		<Dropdown.Item onClick={log}>It is a very very long option</Dropdown.Item>
		<Dropdown.Item>It is a very very long option</Dropdown.Item>
	</Dropdown>
)

export const Default = Template.bind({})
Default.args = {
	children: undefined,
	label: undefined,
	className: undefined,
	id: undefined,
	kind: undefined,
	size: undefined,
	noFill: undefined,
	disabled: undefined,
	pending: undefined,
	style: undefined,
	onClick: undefined,
	onKeyDown: undefined,
}

export const Icon: Story = {
	args: {
		children: (
			<Dropdown>
				<Dropdown.Item icon={<AiOutlineSmile />}>foo</Dropdown.Item>
			</Dropdown>
		),
	},
}

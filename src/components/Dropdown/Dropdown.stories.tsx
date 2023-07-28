import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import Dropdown, { DropdownProps } from './Dropdown'

const meta = {
	title: 'UI/Dropdown',
	component: Dropdown,
	// subcomponents: {
	// 	'Dropdown.Item': Dropdown.Item,
	// },
	parameters: {
		backgrounds: {
			default: 'xmdb',
			values: [{ name: 'xmdb', value: '#121212' }],
		},
	},
} satisfies Meta<typeof Dropdown>

export default meta
// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
type Story = StoryObj<typeof meta>
const { log } = console
const Template: StoryFn<DropdownProps> = (args) => (
	<Dropdown {...args} onClick={log} buttonChildren={<span>I am dropdown</span>} overlaySize='xl'>
		<Dropdown.Item onClick={log}>It is a very very long option</Dropdown.Item>
		<Dropdown.Item>It is a very very long option</Dropdown.Item>
	</Dropdown>
)

export const Default = Template.bind({})
Default.args = {
	children: undefined,
	className: undefined,
	id: undefined,
	overlaySize: undefined,
	disabled: undefined,
	style: undefined,
	onClick: undefined,
	buttonChildren: undefined,
}

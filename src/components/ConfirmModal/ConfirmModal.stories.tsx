import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '../Button/Button'
import { ConfirmModal } from './ConfirmModal'

const meta = {
	title: 'UI/ConfirmModal',
	component: ConfirmModal,
	args: {
		title: 'Example modal',
		variant: 'primary',
	},
} satisfies Meta<typeof ConfirmModal>

export default meta

type Story = StoryObj<typeof meta>

const ExampleModal = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Open modal</Button>
			<ConfirmModal
				title='Example modal'
				isOpen={isOpen}
				variant='primary'
				onClose={() => setIsOpen(false)}
				onConfirm={() => console.log('Confirm!')}
			/>
		</>
	)
}

export const Default: Story = {
	args: {
		isOpen: true,
	},
	render: () => <ExampleModal />,
}

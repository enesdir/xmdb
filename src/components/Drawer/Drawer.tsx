'use client'

import { Fragment, type ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import { IconButton } from '@/components/IconButton'

export type DrawerProps = Readonly<{
	heading?: ReactNode
	isOpen: boolean
	onClose: () => void
	openFrom: 'right' | 'left'
	children: ReactNode
}>
/**
 * Drawer component that opens on user click.
 *
 * @param {ReactNode} heading - Shown at the top of the drawer.
 * @param {Boolean} isOpen - If true opens the drawer.
 * @param {() => void} onClose - Function should set the open state.
 * @param {string} openFrom - Right, left
 * @param {ReactNode} children - React children node.
 */
const Drawer = ({ heading, isOpen, onClose, openFrom = 'right', children }: DrawerProps) => {
	const offScreen = {
		right: 'translate-x-full',
		left: '-translate-x-full',
	}

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as='div' className='relative z-50' onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0 left-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-[--brand-black] opacity-50' />
				</Transition.Child>

				<div className='fixed inset-0'>
					<div className='absolute inset-0 overflow-hidden'>
						<div className={`fixed inset-y-0 flex max-w-full ${openFrom === 'right' ? 'right-0' : ''}`}>
							<Transition.Child
								as={Fragment}
								enter='transform transition ease-in-out duration-300'
								enterFrom={offScreen[openFrom]}
								enterTo='translate-x-0'
								leave='transform transition ease-in-out duration-300'
								leaveFrom='translate-x-0'
								leaveTo={offScreen[openFrom]}
							>
								<Dialog.Panel className='h-screen w-[280px] bg-[--brand-black] text-left align-middle shadow-xl transition-all lg:w-screen lg:py-8'>
									<div className='lg:m-auto lg:max-w-screen-lg lg:px-4'>
										<header
											className={`sticky top-0 mb-2 flex h-[3.5rem] items-center p-1 ${
												heading ? 'justify-between' : 'justify-end'
											}`}
										>
											{heading !== null && <Dialog.Title>{heading}</Dialog.Title>}
											<IconButton
												variant='rounded'
												className='p-3 text-2xl font-extrabold text-white transition hover:text-white/50 lg:bg-[--brand-yellow] lg:text-[--brand-black]'
												onClick={onClose}
												label='Close panel'
												icon={<AiOutlineClose aria-label='Close panel' className='align-middle' />}
											/>
										</header>
									</div>
									<div className='lg:m-auto lg:max-w-screen-lg'>
										<div className='lg:flex lg:flex-wrap'>{children}</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}

/* Use for associating arialabelledby with the title*/
Drawer.Title = Dialog.Title

export { Drawer }

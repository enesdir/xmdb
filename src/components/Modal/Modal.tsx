'use client'

import { Fragment } from 'react'
import { useRouter } from 'next/navigation'
import { Dialog, Transition } from '@headlessui/react'
import { IoCloseSharp } from 'react-icons/io5'

import { IconButton } from '@/components/IconButton'
import { cn } from '@/utils/cn'
import { ModalTitle } from './ModalTitle'

import type { Dispatch, PropsWithChildren, SetStateAction } from 'react'

export type ModalProps = Readonly<
	{
		isOpen?: boolean
		onClose?: () => void
		hasRoute?: boolean
		setIsOpen?: Dispatch<SetStateAction<boolean>>
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
		variant?: 'primary' | 'secondary'
	} & PropsWithChildren
>

export const Modal = ({
	isOpen,
	onClose,
	setIsOpen,
	children,
	hasRoute,
	size = 'lg',
	variant = 'primary',
}: ModalProps) => {
	const router = useRouter()

	const closeModal: () => void = () => {
		// fire onClose event if provided
		onClose && onClose()
		if (hasRoute) {
			// setIsOpen(false)
			router.back()
		}
		if (setIsOpen) {
			setIsOpen(false)
		}
	}
	return (
		<Transition as={Fragment} show={isOpen} appear>
			<Dialog as='div' onClose={() => closeModal()} className='relative z-40'>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-100'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 z-50 bg-gray-900/80 transition-opacity' />
				</Transition.Child>
				<div className='fixed inset-0 z-50 w-screen overflow-y-auto bg-black/50'>
					<div className='flex min-h-full items-center justify-center p-0 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-0 scale-95'
							enterTo='opacity-100 translate-y-0 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 scale-100'
							leaveTo='opacity-0 translate-y-0 scale-95'
						>
							<Dialog.Panel
								className={cn(
									'inline-block w-full scale-100 py-12 text-left align-bottom shadow-xl transition-all sm:align-middle',
									{ 'sm:max-w-6xl': size === 'xl' },
									{ 'sm:max-w-5xl': size === 'lg' },
									{ 'sm:max-w-3xl': size === 'md' },
									{ 'sm:max-w-lg': size === 'sm' },
									{ 'sm:max-w-sm': size === 'xs' }
								)}
							>
								<div className='absolute right-0 top-0'>
									<IconButton
										variant='rounded'
										label='Close modal'
										icon={<IoCloseSharp className='h-6 w-6' />}
										onClick={() => closeModal()}
										className={cn(
											'p-3',
											{
												'text-gray-100 ': variant === 'primary',
											},
											{
												'text-gray-100 outline-brand-black4 hover:bg-gray-700': variant === 'secondary',
											}
										)}
									/>
								</div>
								<div
									className={cn(
										'w-full rounded-sm p-4',
										{ 'bg-white': variant === 'primary' },
										{ 'bg-brand-black': variant === 'secondary' }
									)}
								>
									{children}
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}

Modal.Title = ModalTitle

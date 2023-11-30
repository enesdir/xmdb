'use client'

import { Dialog } from '@headlessui/react'

import type { PropsWithChildren } from 'react'

type ModalTitleProps = Readonly<PropsWithChildren>

export const ModalTitle = ({ children }: ModalTitleProps) => (
	<Dialog.Title className='mb-2.5 text-lg font-semibold text-black'>{children}</Dialog.Title>
)

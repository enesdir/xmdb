'use client'

import type { PropsWithChildren } from 'react'

import { SessionProvider } from 'next-auth/react'

import { ToastWrapper } from '@/components/ToastWrapper'
import { SearchBarProvider } from './SearchBarProvider'
import { TrpcProvider } from './TrpcProvider'

export const AppProviders = ({ children }: Readonly<PropsWithChildren>) => (
	<SessionProvider>
		<TrpcProvider>
			<SearchBarProvider>{children}</SearchBarProvider>
			<ToastWrapper />
		</TrpcProvider>
	</SessionProvider>
)

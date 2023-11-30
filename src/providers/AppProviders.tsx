'use client'

import { SessionProvider } from 'next-auth/react'

import { ToastWrapper } from '@/components/ToastWrapper'
import { SearchBarProvider } from './SearchBarProvider'
import { TrpcProvider } from './TrpcProvider'

import type { PropsWithChildren } from 'react'

export const AppProviders = ({ children }: Readonly<PropsWithChildren>) => (
	<SessionProvider>
		<TrpcProvider>
			<SearchBarProvider>{children}</SearchBarProvider>
			<ToastWrapper />
		</TrpcProvider>
	</SessionProvider>
)

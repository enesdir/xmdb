'use client'

import type { PropsWithChildren } from 'react'
import { SessionProvider } from 'next-auth/react'
import ToastWrapper from '@/components/ui/ToastWrapper'
import { TrpcProvider } from './TrpcProvider'

export const AppProviders = ({ children }: Readonly<PropsWithChildren>) => (
	<SessionProvider>
		<TrpcProvider>
			{children}
			<ToastWrapper />
		</TrpcProvider>
	</SessionProvider>
)

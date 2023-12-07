'use client'

import { SessionProvider } from 'next-auth/react'

import { ToastWrapper } from '@/components/ToastWrapper'
import { SearchBarProvider } from './SearchBarProvider'
import { TrpcProvider } from './TrpcProvider'

import type { Session } from 'next-auth'
import type { PropsWithChildren } from 'react'

type AppProvidersProps = Readonly<
	{
		headers: Headers
		session: Session
	} & PropsWithChildren
>
export const AppProviders = ({ children, session, headers }: AppProvidersProps) => (
	<SessionProvider session={session}>
		<TrpcProvider headers={headers}>
			<SearchBarProvider>{children}</SearchBarProvider>
			<ToastWrapper />
		</TrpcProvider>
	</SessionProvider>
)

import UserShowProviders from './providers'

import type { PropsWithChildren, ReactNode } from 'react'

type UserLayoutProps = Readonly<
	{
		show: ReactNode
	} & PropsWithChildren
>
export default function UserLayout({ show, children }: UserLayoutProps) {
	return <UserShowProviders modal={show}>{children}</UserShowProviders>
}

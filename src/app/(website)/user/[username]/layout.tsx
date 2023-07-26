import type { PropsWithChildren, ReactNode } from 'react'
import UserShowProviders from './providers'

type UserLayoutProps = Readonly<
	{
		show: ReactNode
	} & PropsWithChildren
>
export default function UserLayout({ show, children }: UserLayoutProps) {
	return <UserShowProviders modal={show}>{children}</UserShowProviders>
}

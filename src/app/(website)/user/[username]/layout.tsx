import type { PropsWithChildren, ReactNode } from 'react'

type UserLayoutProps = Readonly<
	{
		show: ReactNode
	} & PropsWithChildren
>
export default function UserLayout({ show, children }: UserLayoutProps) {
	return (
		<>
			{/* Only show userShow modal if it's on the user page */}
			{show}
			{children}
		</>
	)
}

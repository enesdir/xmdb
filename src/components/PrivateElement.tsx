'use client'

import type { PropsWithChildren } from 'react'
import { useSession } from 'next-auth/react'

type PrivateElementProps = Readonly<
	{
		loggedIn?: boolean
	} & PropsWithChildren
>

export const PrivateElement = ({ loggedIn = true, children }: PrivateElementProps) => {
	const { data } = useSession()

	if (Boolean(data) !== loggedIn) {
		return null
	}

	return <>{children}</>
}

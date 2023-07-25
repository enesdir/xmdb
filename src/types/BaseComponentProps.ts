import type { PropsWithChildren } from 'react'

export type BaseComponentProps = Readonly<
	{
		className?: string
	} & PropsWithChildren
>

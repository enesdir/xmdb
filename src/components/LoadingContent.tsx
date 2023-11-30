import { Spinner } from '@/components/Spinner/Spinner'

import type { PropsWithChildren } from 'react'

type LoadingContentProps = Readonly<
	{
		isLoading: boolean
	} & PropsWithChildren
>

export const LoadingContent = ({ isLoading, children }: LoadingContentProps) => {
	if (isLoading) {
		return <Spinner center />
	}

	return <>{children}</>
}

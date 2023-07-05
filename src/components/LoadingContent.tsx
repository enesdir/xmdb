import type { PropsWithChildren } from 'react'
import { Spinner } from '@/components/Spinner/Spinner'

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

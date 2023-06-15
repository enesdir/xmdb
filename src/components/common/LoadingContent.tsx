import type { ReactNode } from 'react'
import { Spinner } from '../ui/Spinner/Spinner'

type LoadingContentProps = Readonly<{
	isLoading: boolean
	children: ReactNode
}>

export const LoadingContent = ({ isLoading, children }: LoadingContentProps) => {
	if (isLoading) {
		return (
			<div className='flex justify-center'>
				<Spinner />
			</div>
		)
	}

	return <>{children}</>
}

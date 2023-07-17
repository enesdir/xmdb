import type { PropsWithChildren } from 'react'

export const MainWrapper = ({ children }: PropsWithChildren) => {
	return (
		<div className='relative min-h-[67vh] min-w-[300px] bg-white text-base font-normal text-black'>
			{children}
		</div>
	)
}

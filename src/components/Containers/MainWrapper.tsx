import type { PropsWithChildren } from 'react'

export const MainWrapper = ({ children }: PropsWithChildren) => {
	return (
		<main className='relative min-h-[67vh] min-w-[300px] bg-black text-base font-normal normal-case leading-6 tracking-[0.03125em] text-white'>
			<div className='relative mx-auto my-0 w-full'>{children}</div>
		</main>
	)
}
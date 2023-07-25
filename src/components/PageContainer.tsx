import type { PropsWithChildren } from 'react'

export const PageContainer = ({ children }: PropsWithChildren) => {
	return (
		<section className='relative m-0 min-h-[3.5rem] w-full items-center border-none p-0 text-base md:mx-auto md:my-0 md:px-3 md:py-0 lg:max-w-screen-lg xl:max-w-screen-xl'>
			{children}
		</section>
	)
}

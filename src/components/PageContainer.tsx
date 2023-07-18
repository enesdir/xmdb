import type { PropsWithChildren } from 'react'

export const PageContainer = ({ children }: PropsWithChildren) => {
	return (
		<section className='relative mx-auto my-0 min-h-[3.5rem] w-full items-center border-none p-1 px-3 py-0 text-base md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
			{children}
		</section>
	)
}

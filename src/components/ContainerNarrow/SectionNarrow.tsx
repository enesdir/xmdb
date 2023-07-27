import type { PropsWithChildren } from 'react'

export const SectionNarrow = ({ children }: PropsWithChildren) => {
	return (
		<div className='w-full bg-[#e3e2dd]'>
			<section className='relative m-0 w-full items-center border-none p-0 text-base md:mx-auto md:my-0 md:px-3 md:py-0 lg:max-w-screen-md xl:max-w-screen-lg'>
				{children}
			</section>
		</div>
	)
}

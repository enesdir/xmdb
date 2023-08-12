import { CustomLink } from '@/components/CustomLink'

export const APFooter = () => {
	return (
		<div className='w-full py-4'>
			<div className='from-black-15 via-black-3 -mb-4 h-10 bg-gradient-to-b '></div>
			<div className='flex items-center justify-center space-x-2 pt-2 text-[11px] leading-[1.465]'>
				<CustomLink href='#' variant='classic'>
					Help
				</CustomLink>
				<CustomLink href='/help/conditions' variant='classic'>
					Conditions of Use
				</CustomLink>
				<CustomLink href='/privacy' variant='classic'>
					Privacy Notice
				</CustomLink>
			</div>
			<div className='flex items-center justify-center space-x-2 pt-4 text-[11px] leading-[1.465]'>
				<span className='text-[#555]'>
					© 1996-{new Date().getFullYear()}, Awesome Company, Inc. or its affiliates
				</span>
			</div>
		</div>
	)
}

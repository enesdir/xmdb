import Link from 'next/link'

export const HeroCrew = () => {
	return (
		<div className='hidden lg:block'>
			<div>
				<ul className='m-0 flex list-none flex-col p-0'>
					<li className='relative z-0 flex min-h-[3rem] flex-wrap items-center border-t border-solid border-white/20 py-3'>
						<span className='max-w-full shrink-0 border-[none] pr-3 text-start font-medium leading-5 tracking-[0.00937em] text-inherit'>
							Director
						</span>
						<div className='relative z-[1]'>
							<ul className='m-0 inline list-none p-0 text-base font-normal tracking-wider'>
								<li className='inline list-none align-middle'>
									<Link href='#'>Name Director</Link>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

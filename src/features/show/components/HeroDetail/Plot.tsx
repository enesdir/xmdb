type PlotProps = Readonly<{
	text: string
}>
export const Plot = ({ text }: PlotProps) => {
	const truncateText: (text: string, maxLength: number) => string = (text, maxLength) => {
		if (text.length > maxLength) {
			return text.slice(0, maxLength) + ' ...'
		}
		return text
	}

	return (
		<p className='text-sm font-normal normal-case leading-5 tracking-[0.01786em] text-white lg:mb-3 xs:text-base xs:font-normal xs:normal-case xs:leading-6 xs:tracking-[0.03125em]'>
			<span className='block'>
				{truncateText(text, 150)}
				{text.length > 150 && (
					<a href='#' className='font-medium text-blue-500 hover:text-blue-700'>
						Read All
					</a>
				)}
			</span>
		</p>
	)
}

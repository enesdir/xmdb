type TextWithDividerProps = Readonly<{ text: string }>
export const TextWithDivider = ({ text }: TextWithDividerProps) => {
	return (
		<p className='mt-3 block text-center leading-[0.5]'>
			<span className='relative inline-block before:absolute before:right-full before:top-1/2 before:mr-2 before:h-1 before:w-24 before:border-t before:border-[#555555] before:content-[""] after:absolute after:left-full after:top-1/2 after:ml-2 after:h-1 after:w-24 after:border-t after:border-[#555555] after:content-[""]'>
				{text}
			</span>
		</p>
	)
}

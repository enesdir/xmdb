type TextWithDividerProps = Readonly<{ text: string }>
export const TextWithDivider = ({ text }: TextWithDividerProps) => {
	return (
		<div className='my-6 flex items-center before:mr-8 before:block before:h-[1px] before:flex-1 before:bg-[#555555] after:ml-8 after:block after:h-[1px] after:flex-1 after:bg-[#555555]'>
			{text}
		</div>
	)
}

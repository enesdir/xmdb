import { cn } from '@/utils/cn'

type TextWithDividerProps = Readonly<{ text: string; className?: string }>
export const TextWithDivider = ({ text, className }: TextWithDividerProps) => {
	return (
		<div
			className={cn(
				'my-6 flex items-center justify-center before:mr-8 before:block before:h-[1px] before:flex-1 before:bg-[#555555] after:ml-8 after:block after:h-[1px] after:flex-1 after:bg-[#555555]',
				className
			)}
		>
			{text}
		</div>
	)
}

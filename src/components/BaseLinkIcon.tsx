import { TbExternalLink } from 'react-icons/tb'
import { cn } from '@/utils/cn'
import { BaseLink, type BaseLinkProps } from './BaseLink'

type BaseLinkIconProps = Readonly<BaseLinkProps>
export const BaseLinkIcon = ({ href, label, className, children, ...props }: BaseLinkIconProps) => {
	return (
		<BaseLink
			href={href}
			className={cn('!hover:bg-none p-2 text-white/95 hover:underline', className)}
			{...props}
			aria-disabled='false'
			label={label}
		>
			{children}
			<TbExternalLink className='mr-1 inline-block h-4 w-4 overflow-hidden align-middle text-white/95 transition' />
		</BaseLink>
	)
}

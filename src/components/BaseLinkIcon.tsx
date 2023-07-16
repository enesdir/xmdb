import { TbExternalLink } from 'react-icons/tb'
import { cn } from '@/lib/utils/cn'
import { BaseLink, type BaseLinkProps } from './BaseLink'

type BaseLinkIconProps = Readonly<BaseLinkProps>
export const BaseLinkIcon = ({ href, label, className, children, ...props }: BaseLinkIconProps) => {
	return (
		<BaseLink href={href} className={cn('p-2', className)} {...props} aria-disabled='false' label={label}>
			{children}
			<TbExternalLink className='h-5 w-5 text-white/95 transition' />
		</BaseLink>
	)
}

import { cn } from '@/utils/cn'

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
	return <div className={cn('animate-pulse rounded-md bg-white/10', className)} {...props} />
}

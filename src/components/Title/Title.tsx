import { HTMLAttributes } from 'react'

export const Title = ({ children, ...rest }: HTMLAttributes<HTMLHeadingElement>) => (
	<h1 {...rest}>{children}</h1>
)

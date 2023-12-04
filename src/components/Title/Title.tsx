import { HTMLAttributes } from 'react'

type TitleProps = Readonly<
	{
		as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	} & HTMLAttributes<HTMLHeadingElement>
>
export const Title = ({ as: As = 'h1', children, ...rest }: TitleProps) => <As {...rest}>{children}</As>

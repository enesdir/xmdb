import { HTMLAttributes } from 'react'

export type SubTitleProps = HTMLAttributes<HTMLHeadingElement>

export const SubTitle = ({ children, ...rest }: SubTitleProps) => <h2 {...rest}>{children}</h2>

import type { ComponentProps } from 'react'
import { Button } from '../Button/Button'
import { Spinner } from '../Spinner/Spinner'

type LoadingButtonProps = Readonly<{
	isLoading: boolean
}> &
	Omit<ComponentProps<typeof Button>, 'icon'>

export const LoadingButton = ({ isLoading, disabled, ...props }: LoadingButtonProps) => (
	<Button disabled={disabled || isLoading} icon={isLoading && <Spinner size='xs' />} {...props} />
)

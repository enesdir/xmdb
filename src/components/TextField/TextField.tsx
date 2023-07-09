import type { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react'
import { forwardRef, useId } from 'react'
import { ErrorMessage, FieldLabel } from '@/components'
import { cn } from '@/lib/utils/cn'
import { TextFieldIcon } from './TextFieldIcon'

type TextFieldProps = Readonly<{
	autoComplete?: boolean
	spellCheck?: boolean
	required?: boolean
	name?: string
	label?: string
	error?: string
	value?: string
	icon?: ReactNode
	leftIcon?: ReactNode
	onChange?: ChangeEventHandler<HTMLInputElement>
	onBlur?: FocusEventHandler<HTMLInputElement>
	type: 'email' | 'number' | 'password' | 'text'
	/** Input placeholder */
	placeholder: string
}>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{
			autoComplete = true,
			spellCheck = true,
			required,
			name,
			label,
			error,
			value,
			leftIcon,
			icon,
			onChange,
			onBlur,
			type,
			placeholder,
		},
		ref
	) => {
		const id = useId()

		return (
			<div className='w-full space-y-1'>
				{label && <FieldLabel htmlFor={id} label={label} required={required} />}
				<div className='relative'>
					{leftIcon && <TextFieldIcon icon={leftIcon} position='left' error={Boolean(error)} />}
					<input
						id={id}
						name={name}
						ref={ref}
						type={type}
						value={value}
						placeholder={placeholder}
						required={required}
						onChange={onChange}
						onBlur={onBlur}
						className={cn(
							'duration-250 focus:border-primary-400 w-full rounded-lg border bg-white p-2.5 shadow-sm transition-colors focus:outline-none',
							leftIcon && 'pl-10',
							error && 'border-red-600 text-red-600 focus:border-red-600',
							icon && 'pr-9'
						)}
						{...(!autoComplete && { autoComplete: 'off' })}
						{...(!spellCheck && { spellCheck })}
					/>
					{icon && <TextFieldIcon icon={icon} error={Boolean(error)} position='right' />}
				</div>
				{error && <ErrorMessage message={error} />}
			</div>
		)
	}
)

TextField.displayName = 'TextField'

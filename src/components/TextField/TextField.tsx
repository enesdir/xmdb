import type { ChangeEventHandler, ComponentPropsWithRef, FocusEventHandler, ReactNode } from 'react'
import { forwardRef, useId } from 'react'
import { ErrorMessage } from '@/components/ErrorMessage'
import { FieldLabel } from '@/components/FieldLabel'
import { cn } from '@/utils/cn'
import { TextFieldIcon } from './TextFieldIcon'

type TextFieldProps = Readonly<
	{
		autoComplete?: boolean
		spellCheck?: boolean
		required?: boolean
		name?: string
		/** Input label */
		label?: string
		error?: string
		value?: string
		icon?: ReactNode
		leftIcon?: ReactNode
		onFocus?: FocusEventHandler<HTMLInputElement>
		onChange?: ChangeEventHandler<HTMLInputElement>
		onBlur?: FocusEventHandler<HTMLInputElement>
		/**
		 * Input type
		 *
		 * @example Text, email, password
		 */
		type: 'email' | 'number' | 'password' | 'text'
		/** Input placeholder */
		placeholder: string
	} & ComponentPropsWithRef<'input'>
>

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
			onFocus,
			onBlur,
			type,
			placeholder,
			className,
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
						onFocus={onFocus}
						className={cn(
							'duration-250 focus:border-primary-400 w-full rounded-lg border bg-white p-2 shadow-sm transition-colors focus:outline-none',
							leftIcon && 'pl-10',
							error && 'border-red-600 text-red-600 focus:border-red-600',
							icon && 'pr-9',
							className
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

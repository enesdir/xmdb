import type {
	ChangeEventHandler,
	ComponentPropsWithRef,
	FocusEventHandler,
	KeyboardEvent,
	ReactNode,
} from 'react'
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
		disabled?: boolean
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
		onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
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
			disabled,
			leftIcon,
			icon,
			onChange,
			onFocus,
			onBlur,
			onKeyDown,
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
						disabled={disabled}
						onChange={onChange}
						onBlur={onBlur}
						onFocus={onFocus}
						onKeyDown={onKeyDown}
						className={cn(
							'duration-250 focus:border-primary-400 w-full rounded-lg border bg-white p-2 shadow-sm transition-colors focus:outline-none',
							{ 'pl-10': leftIcon },
							{ 'border-red-600 text-red-600 focus:border-red-600': error },
							{ 'pr-9': icon },
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

import React, { cloneElement, forwardRef, isValidElement, useId } from 'react'

import { ErrorMessage } from '@/components/ErrorMessage'
import { FieldLabel } from '@/components/FieldLabel'
import { cn } from '@/utils/cn'

import type { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react'

type SelectInputProps = Readonly<{
	spellCheck?: boolean
	required?: boolean
	name?: string
	label?: string
	error?: string
	onChange?: ChangeEventHandler<HTMLSelectElement>
	onBlur?: FocusEventHandler<HTMLSelectElement>
	placeholder: string
	readOnly?: boolean
	children: ReactNode
}>

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
	(
		{ spellCheck = true, required, name, label, error, onChange, onBlur, placeholder, readOnly, children },
		ref,
		...rest
	) => {
		const id = useId()
		// Add disabled and selected attribute to option, will be used if readonly
		const readOnlyChildren = React.Children.map<ReactNode, ReactNode>(children, (child) => {
			if (isValidElement(child)) {
				return cloneElement(child, {
					// @ts-expect-error: todo
					disabled: child.props.value !== rest?.defaultValue,
					// selected: child.props.value === rest?.defaultValue,
				})
			}
		})
		return (
			<div className='space-y-1'>
				{label && <FieldLabel htmlFor={id} label={label} required={required} />}
				<select
					id={id}
					aria-describedby={id}
					name={name}
					placeholder={placeholder}
					required={required}
					ref={ref}
					onChange={onChange}
					onBlur={onBlur}
					className={cn(
						'block w-full resize-none rounded-lg border p-2.5 leading-5 shadow-sm transition-colors focus:border-blue-400 focus:outline-0',
						error && 'border-red-600 text-red-600 focus:border-red-600'
					)}
					{...(!spellCheck && { spellCheck })}
				>
					{placeholder && (
						<option value='' disabled hidden>
							{placeholder}
						</option>
					)}
					{readOnly ? readOnlyChildren : children}
				</select>
				{error && <ErrorMessage message={error} />}
			</div>
		)
	}
)

SelectInput.displayName = 'SelectInput'

import type { ChangeEventHandler, FocusEventHandler, KeyboardEvent } from 'react'
import { forwardRef, useId } from 'react'
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage'
import { FieldLabel } from '@/components/FieldLabel'
import { cn } from '@/utils/cn'

type TextareaProps = Readonly<{
	spellCheck?: boolean
	required?: boolean
	disabled?: boolean
	name?: string
	label?: string
	error?: string
	onChange?: ChangeEventHandler<HTMLTextAreaElement>
	onBlur?: FocusEventHandler<HTMLTextAreaElement>
	placeholder: string
	onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	(
		{ spellCheck = true, required, name, disabled, label, error, onChange, onBlur, onKeyDown, placeholder },
		ref
	) => {
		const id = useId()

		return (
			<div className='space-y-1'>
				{label && <FieldLabel htmlFor={id} label={label} required={required} />}
				<textarea
					id={id}
					name={name}
					placeholder={placeholder}
					required={required}
					ref={ref}
					disabled={disabled}
					onChange={onChange}
					onBlur={onBlur}
					onKeyDown={onKeyDown}
					className={cn(
						'duration-250 app-scrollbar focus:border-primary-400 block h-32 w-full resize-none rounded-lg border p-2.5 leading-5 shadow-sm transition-colors focus:outline-0',
						{ 'border-red-600 text-red-600 focus:border-red-600': error },
						{ 'cursor-not-allowed': disabled }
					)}
					{...(!spellCheck && { spellCheck })}
				/>
				{error && <ErrorMessage message={error} />}
			</div>
		)
	}
)

Textarea.displayName = 'Textarea'

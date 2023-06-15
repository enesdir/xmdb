import { forwardRef } from 'react'
import type { ChangeEventHandler, FocusEventHandler } from 'react'
import { FaCheck } from 'react-icons/fa'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'

type CheckboxProps = Readonly<{
	error?: string
	name?: string
	onChange?: ChangeEventHandler<HTMLInputElement>
	onBlur?: FocusEventHandler<HTMLInputElement>
	label: string
}>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ error, name, onChange, onBlur, label }, ref) => (
		<div className='space-y-1'>
			<label className='flex w-fit cursor-pointer items-center gap-x-1.5 text-sm font-medium'>
				<input
					type='checkbox'
					ref={ref}
					name={name}
					onChange={onChange}
					onBlur={onBlur}
					className='peer hidden'
				/>
				<div className='peer-checked:border-primary-400 peer-checked:bg-primary flex h-6 w-6 items-center justify-center rounded-md border text-xs text-white transition-colors duration-100'>
					<FaCheck />
				</div>
				{label}
			</label>
			{error && <ErrorMessage message={error} />}
		</div>
	)
)

Checkbox.displayName = 'Checkbox'

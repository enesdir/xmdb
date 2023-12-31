import { forwardRef, useId } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

import { cn } from '@/utils/cn'

import type { ChangeEvent, ChangeEventHandler, FocusEventHandler, ReactNode } from 'react'

type FileButtonProps = Readonly<
	{
		name?: string
		accept?: string
		multiple?: boolean
		fill?: boolean
		icon?: boolean
		variant?: 'primary' | 'danger' | 'text' | 'default'
		onChange?: ChangeEventHandler<HTMLInputElement>
		onBlur?: FocusEventHandler<HTMLInputElement>
		onFiles?: (files: FileList) => void
		children: ReactNode
	} & ({ limit?: undefined; onLimitError?: undefined } | { limit: number; onLimitError?: () => void })
>

export const FileButton = forwardRef<HTMLInputElement, FileButtonProps>(
	(
		{
			name,
			accept,
			limit,
			multiple,
			fill,
			icon,
			variant = 'default',
			onChange,
			onBlur,
			onFiles,
			onLimitError,
			children,
		},
		ref
	) => {
		const id = useId()

		const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
			const { files } = event.target

			if (!files) return

			if (limit && files.length > limit) {
				onLimitError?.()
				event.preventDefault()
			} else {
				onFiles?.(files)
			}

			onChange?.(event)
		}

		return (
			<>
				<label
					htmlFor={id}
					className={cn(
						'flex items-center justify-center gap-x-1.5 rounded-lg border px-5 py-2.5 font-medium shadow-sm transition disabled:pointer-events-none disabled:opacity-75',
						'cursor-pointer select-none',
						fill ? 'w-full' : 'w-fit',
						[
							variant === 'primary' && ['border-blue-400 bg-blue-500 text-white hover:bg-blue-400'],
							variant === 'default' && ['bg-white text-black dark:bg-gray-600 dark:text-white'],
							variant === 'danger' && ['border-red-600 text-red-600 hover:bg-red-600/10'],
							variant === 'text' && ['border-transparent text-black shadow-none hover:bg-gray-100'],
						]
					)}
				>
					{icon && <AiOutlineCloudUpload />}
					{children}
				</label>
				<input
					type='file'
					ref={ref}
					id={id}
					name={name}
					accept={accept}
					multiple={multiple}
					onChange={handleInputChange}
					onBlur={onBlur}
					hidden
				/>
			</>
		)
	}
)

FileButton.displayName = 'FileButton'

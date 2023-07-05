'use client'

import type { ComponentProps } from 'react'
import { forwardRef, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { IconButton, TextField } from '@/components'

type PasswordFieldProps = Omit<ComponentProps<typeof TextField>, 'type' | 'icon'>

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>((props, ref) => {
	const [isVisible, setIsVisible] = useState(false)

	const icon = isVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />

	return (
		<TextField
			ref={ref}
			type={isVisible ? 'text' : 'password'}
			icon={
				<IconButton
					label={`${isVisible ? 'Hide' : 'Show'} password`}
					icon={icon}
					onClick={() => setIsVisible((prev) => !prev)}
				/>
			}
			{...props}
		/>
	)
})

PasswordField.displayName = 'PasswordField'

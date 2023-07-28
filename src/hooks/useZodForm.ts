import type { UseFormProps } from 'react-hook-form'
import type { TypeOf, ZodSchema } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const useZodForm = <T extends ZodSchema>(
	schema: T,
	options: Omit<UseFormProps<TypeOf<T>>, 'resolver'> = {}
) =>
	useForm<TypeOf<T>>({
		...options,
		resolver: zodResolver(schema),
	})

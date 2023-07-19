import type { PropsWithChildren } from 'react'
import { Container } from '@/components/Container'

export default function AppLayoutContainer({ children }: PropsWithChildren) {
	return (
		<>
			<Container>{children}</Container>
		</>
	)
}

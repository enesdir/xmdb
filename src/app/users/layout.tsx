import type { PropsWithChildren } from 'react'
import { Container } from '@/components/Container'

export default function UsersLayout({ children }: PropsWithChildren) {
	return <Container>{children}</Container>
}

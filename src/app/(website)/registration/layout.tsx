import type { PropsWithChildren } from 'react'

import { SectionNarrow } from '@/components/ContainerNarrow/SectionNarrow'

export default async function LayoutContainer({ children }: PropsWithChildren) {
	return <SectionNarrow>{children}</SectionNarrow>
}

import { SectionNarrow } from '@/components/ContainerNarrow/SectionNarrow'

import type { PropsWithChildren } from 'react'

export default async function LayoutContainer({ children }: PropsWithChildren) {
	return <SectionNarrow>{children}</SectionNarrow>
}

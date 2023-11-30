import { env } from '@/env.mjs'

import type { MetadataRoute } from 'next'

/**
 * Template metadata for app links
 *
 * @returns {MetadataRoute.Sitemap}
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: env.NEXT_PUBLIC_BASE_URL,
			lastModified: new Date().toISOString().split('T')[0],
		},
	]
}

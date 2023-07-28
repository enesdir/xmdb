import type { MetadataRoute } from 'next'

import { getBaseUrl } from '@/utils/getBaseUrl'

/**
 * Template metadata for app links
 *
 * @returns {MetadataRoute.Sitemap}
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const host = getBaseUrl(true)

	return [
		{
			url: host,
			lastModified: new Date(),
		},
	]
}

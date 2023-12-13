import { type MetadataRoute } from 'next'

import { siteConfig } from '@/constants/siteConfig'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
		host: siteConfig.siteUrl,
	}
}

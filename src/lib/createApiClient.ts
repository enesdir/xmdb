import { Zodios, ZodiosEndpointDefinitions } from '@zodios/core'
import { Narrow } from '@zodios/core/lib/utils.types'

import type { ZodiosOptions } from '@zodios/core'

export function createApiClient<Api extends ZodiosEndpointDefinitions>(
	baseUrl: string,
	endpoints: Narrow<Api>,
	options?: ZodiosOptions
) {
	return new Zodios(baseUrl, endpoints, options)
}

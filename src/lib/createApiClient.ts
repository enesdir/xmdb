import type { ZodiosOptions } from '@zodios/core'

import { Zodios, ZodiosEndpointDefinitions } from '@zodios/core'
import { Narrow } from '@zodios/core/utils.types'

export function createApiClient<Api extends ZodiosEndpointDefinitions>(
	baseUrl: string,
	endpoints: Narrow<Api>,
	options?: ZodiosOptions
) {
	return new Zodios(baseUrl, endpoints, options)
}

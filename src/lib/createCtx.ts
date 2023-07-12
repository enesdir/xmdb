// Source: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
import React, { Dispatch, SetStateAction } from 'react'

type ExtendedProps = Record<string, unknown> | null
/**
 * A helper to create a Context and Provider with no upfront default value, and without having to check for
 * undefined all the time.
 */
export function createCtx<A extends ExtendedProps>() {
	const ctx = React.createContext<A | undefined>(undefined)
	function useCtx() {
		const c = React.useContext(ctx)
		if (c === undefined) {
			throw new Error('useCtx must be inside a Provider with a value')
		}
		return c
	}
	return [useCtx, ctx.Provider] as const // 'as const' makes TypeScript infer a tuple
}

export type Update<Type> = {
	[Property in keyof Type as `update${Capitalize<string & Property>}`]: Dispatch<
		SetStateAction<Type[Property]>
	>
}

/**
 * @usage Creating Context and Provider
 * const [useAppState, AppStateProvider] = createCtx<AppState & Update<AppState>>();
 * Inside provider
 * const [myState, updateMyState] = useState(false);
 */

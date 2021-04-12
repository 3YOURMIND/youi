import { Placement } from 'tippy.js'

import { SpecifyRequiredProps } from '../types/utilities'

export namespace KottiPopover {
	export type PropsInternal = {
		forceShowPopover: boolean
		options: unknown[]
		placement: Placement
		size: Size
	}

	export type Props = SpecifyRequiredProps<PropsInternal, never>

	export enum Size {
		AUTO = 'AUTO',
		EXTRA_LARGE = 'xl',
		LARGE = 'lg',
		MEDIUM = 'md',
		SMALL = 'sm',
	}
}

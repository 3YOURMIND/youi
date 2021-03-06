import { Yoco } from '@3yourmind/yoco'

import { SpecifyRequiredProps } from '../types/utilities'

export namespace KottiBanner {
	export type PropsInternal = {
		actionText: string | null
		icon: Yoco.Icon
		isGray: boolean
		message: string
		expandCloseLabel: string | null
		expandLabel: string | null
	}

	export type Props = SpecifyRequiredProps<PropsInternal, 'message'>

	export type Translations = {
		expandCloseLabel: string
		expandLabel: string
	}
}

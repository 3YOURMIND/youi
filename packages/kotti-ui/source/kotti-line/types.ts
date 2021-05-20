import { SpecifyRequiredProps } from '../types/utilities'

export namespace KottiLine {
	export enum Position {
		LEFT = 'left',
		CENTER = 'center',
		RIGHT = 'right',
	}
	export type InternalProps = {
		isInteractive: boolean
		position: Position
		text: string
	}

	export type Props = SpecifyRequiredProps<InternalProps, never>
}

import { Yoco } from '@3yourmind/yoco'
import { Ref, SetupContext } from '@vue/composition-api'

import { KottiForm } from '../kotti-form/types'

import { FORM_KEY_NONE } from './constants'

export namespace KottiField {
	export namespace Hook {
		export interface Parameters<DATA_TYPE> {
			emit: SetupContext['emit']

			/**
			 * This is a function that will be called when the value of
			 * the field changes to ensure that the data type is correct
			 */
			isCorrectDataType: (value: unknown) => value is DATA_TYPE

			/**
			 * Useful for checking validation on required fields
			 */
			isEmpty: (value: DATA_TYPE) => boolean
			props: KottiField.Props<DATA_TYPE>
			supports: KottiField.Supports
		}

		export type Returns<DATA_TYPE> = {
			currentValue: KottiField.Props<DATA_TYPE>['value']
			helpDescription: KottiField.Props<DATA_TYPE>['helpDescription']
			helpText: KottiField.Props<DATA_TYPE>['helpText']
			hideClear: KottiField.Props<DATA_TYPE>['hideClear']
			hideValidation: KottiField.Props<DATA_TYPE>['hideValidation']
			inputProps: Readonly<{
				/**
				 * Native HTML Props should have lowercase keys
				 */
				'data-test': string
				disabled: boolean
				tabindex: KottiField.Props<DATA_TYPE>['tabIndex']
			}>
			isDisabled: KottiField.Props<DATA_TYPE>['isDisabled']
			isEmpty: boolean
			isLoading: KottiForm.Props['isLoading']
			isOptional: KottiField.Props<DATA_TYPE>['isOptional']
			size: KottiField.Props<DATA_TYPE>['size']
			label: KottiField.Props<DATA_TYPE>['label']
			leftIcon: KottiField.Props<DATA_TYPE>['leftIcon']
			prefix: KottiField.Props<DATA_TYPE>['prefix']
			rightIcon: KottiField.Props<DATA_TYPE>['rightIcon']
			setValue: (newValue: DATA_TYPE) => void
			suffix: KottiField.Props<DATA_TYPE>['suffix']
			validation: Readonly<KottiField.Validation.Result>
		}

		export type ReturnsWithRefs<DATA_TYPE> = {
			[KEY in keyof Returns<DATA_TYPE>]: Ref<Returns<DATA_TYPE>[KEY]>
		}
	}

	/**
	 * Includes, but is not limited to, properties that are not consumed by the KtForm itself,
	 * but rather just passed-down to all fields inside the form to make common
	 * tasks like disabling the entire form or hiding validation easier.
	 *
	 * These values can be explicitly overriden in the field usage
	 */
	export type InhertiableProps = {
		/**
		 * Is the field disabled?
		 * This will e.g. prevent changing the value
		 */
		isDisabled: boolean

		/**
		 * Show a skeleton in place of the field
		 */
		isLoading: boolean

		/**
		 * Should the user have the option to clear the field
		 */
		hideClear: boolean

		/**
		 * Prevents the validation (e.g. color, text) from being shown
		 */
		hideValidation: boolean

		/**
		 * Defines the size of the field which influences child styles
		 * to make fields e.g. appear more compact
		 */
		size: Size | null
	}

	/**
	 * When adding a new prop, please make sure that no KtFormField
	 * already uses a prop with the same name, to avoid conflicts
	 */
	export type Props<DATA_TYPE> = InhertiableProps & {
		/**
		 * Specifies that the data KtFormContext[formKey]
		 * If formKey is "NONE", it is treated as an explicit opt-out
		 * of the context-based behavior
		 */
		formKey: typeof FORM_KEY_NONE | string | null

		/**
		 * Adds a small questionmark popover to the label to explain
		 * more complicated forms to the user on-demand
		 */
		helpDescription: string | null

		/**
		 * Adds a description below the label
		 */
		helpText: string | null

		/**
		 * Shows a Yoco icon on the left side of the field
		 */
		leftIcon: Yoco.Icon | null

		/**
		 * Shows a Yoco icon on the right side of the field
		 */
		rightIcon: Yoco.Icon | null

		isOptional: boolean
		label: string | null

		/**
		 * Show some string before the field
		 */
		prefix: string | null

		/**
		 * Show some string after the field
		 */
		suffix: string | null
		tabIndex: number
		validator: KottiField.Validation.Function | null

		/**
		 * @default props.formKey
		 * Explicitly overwrite the used validator in case it differs from the formKey
		 */
		validatorKey: string | null

		/**
		 * v-model value
		 */
		value: DATA_TYPE
	}

	export enum Size {
		LARGE = 'large',
		MEDIUM = 'medium',
		SMALL = 'small',
	}

	/**
	 * Object that explicitly specifies which of the KtField.Props are
	 * supported, since it may not always make sense to have some of
	 * the props on certain fields.
	 */
	export type Supports = {
		/**
		 * In some fields, having a clear button would be nonsensical (e.g. KtFieldToggle)
		 */
		clear: boolean

		/**
		 * Affects all decoration properties like icons and affixes.
		 * These aren’t supported on e.g. the KtFieldToggleGroup
		 */
		decoration: boolean

		/**
		 * Some third-party components do not support passing a custom tabIndex
		 */
		tabIndex: boolean
	}

	export type Translations = {
		optionalLabel: string
		requiredMessage: string
	}

	export namespace Validation {
		export type Empty = {
			type: 'empty'
		}

		export type Error = {
			type: 'error'
			text: string | null
		}

		export type Success = {
			type: 'success'
			text: string | null
		}

		export type Warning = {
			type: 'warning'
			text: string | null
		}

		export type Result =
			| KottiField.Validation.Empty
			| KottiField.Validation.Error
			| KottiField.Validation.Success
			| KottiField.Validation.Warning

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		export type Function = (value: any) => KottiField.Validation.Result
	}
}

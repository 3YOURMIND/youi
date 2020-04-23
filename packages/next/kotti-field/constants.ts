import { ComponentPropsOptions } from '@vue/composition-api/dist/component/componentProps'

/**
 * Default Props for Fields implementing KtField
 * ensures compatibility with the useField hook
 */
export const ktFieldProps: ComponentPropsOptions = {
	formKey: { default: null, type: String },
	helpText: { default: null, type: String },
	hideClear: { default: false, type: Boolean },
	isDisabled: { default: false, type: Boolean },
	isLoading: { default: false, type: Boolean },
	isOptional: { default: false, type: Boolean },
	label: { default: null, type: String },
	placeholder: { default: null, type: String },
	validator: { default: null, type: Function },
	validatorKey: { default: null, type: String },
	value: { default: null },
}

/**
 * Explicitly opt-out of using formKey within a KtFormContext
 */
export const FORM_KEY_NONE = 'NONE'

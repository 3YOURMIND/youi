import {
	computed,
	inject,
	ref,
	watch,
	SetupContext,
	reactive,
	onUnmounted,
	onMounted,
} from '@vue/composition-api'
import cloneDeep from 'lodash/cloneDeep'

import { KT_FORM_CONTEXT } from '../kotti-form/constants'
import { KottiForm } from '../kotti-form/types'

import { FORM_KEY_NONE } from './constants'
import { KtFieldErrors } from './errors'
import { KottiField } from './types'

export const useField = <DATA_TYPE>(
	props: KottiField.Props<DATA_TYPE>,
	emit: SetupContext['emit'],
	// eslint-disable-next-line sonarjs/cognitive-complexity
): KottiField.Returns<DATA_TYPE> => {
	const context = inject<KottiForm.Context | null>(KT_FORM_CONTEXT, null)

	// sanity-checks

	watch(
		() => props.formKey,
		(newFormKey) => {
			if (context !== null && newFormKey === null)
				throw new KtFieldErrors.ImplicitFormKeyNone(props)

			if (context === null && newFormKey !== null)
				throw new KtFieldErrors.InvalidPropOutsideOfContext(props, 'formKey')
		},
	)

	watch(
		() => props.validatorKey,
		(newValidatorKey) => {
			if (context === null && newValidatorKey !== null)
				throw new KtFieldErrors.InvalidPropOutsideOfContext(
					props,
					'validatorKey',
				)
		},
	)

	// fetch value

	const currentValue = computed(
		(): DATA_TYPE => {
			if (context === null) return cloneDeep(props.value)

			switch (props.formKey) {
				case FORM_KEY_NONE:
					return cloneDeep(props.value)

				case null:
					throw new KtFieldErrors.ImplicitFormKeyNone(props)

				default:
					return context.values.value[props.formKey] as DATA_TYPE
			}
		},
	)

	// validation

	const isLoading = computed(() => {
		if (props.isLoading) return true
		if (context !== null) return context.isLoading.value
		return false
	})

	const hideValidation = computed(() =>
		isLoading.value
			? true
			: context === null
			? false
			: context.hideValidation.value,
	)

	const validation = computed(
		// eslint-disable-next-line sonarjs/cognitive-complexity
		(): KottiField.Validation.Result => {
			if (props.validatorKey && props.validator)
				throw new KtFieldErrors.NonDeterministicValidatorUsage(props)

			if (context) {
				if (props.validatorKey) {
					if (!(props.validatorKey in context.validators.value))
						throw new KtFieldErrors.ValidatorNotFound(props)

					return context.validators.value[props.validatorKey](
						currentValue.value,
					)
				}

				// if no validatorKey is defined, we should try to fall-back to using the formKey
				if (
					props.formKey !== null &&
					props.formKey !== FORM_KEY_NONE &&
					props.formKey in context.validators.value
				)
					return context.validators.value[props.formKey](currentValue.value)
			} else {
				if (props.validatorKey)
					throw new KtFieldErrors.InvalidPropOutsideOfContext(
						props,
						'validatorKey',
					)

				if (props.formKey)
					throw new KtFieldErrors.InvalidPropOutsideOfContext(props, 'formKey')
			}

			/**
			 * Return default validator result here because without a validator, everything will always
			 * default to being valid
			 */
			return props.validator
				? props.validator(currentValue.value)
				: { type: null }
		},
	)

	// export

	const field = reactive<KottiField.ReturnsWithRefs<DATA_TYPE>>({
		classes: computed(() => props.classes),
		currentValue,
		helpText: computed(() => props.helpText),
		hideClear: computed(() => props.hideClear),
		hideValidation,
		isDisabled: computed(() => props.isDisabled),
		isLoading,
		isOptional: computed(() => props.isOptional),
		label: computed(() => props.label),
		leftIcon: computed(() => props.leftIcon),
		placeholder: computed(() => props.placeholder),
		prefix: computed(() => props.prefix),
		rightIcon: computed(() => props.rightIcon),
		setValue: ref((newValue: DATA_TYPE) => {
			if (props.isDisabled)
				throw new KtFieldErrors.DisabledSetValueCalled(props)

			if (
				context === null ||
				props.formKey === null ||
				props.formKey === FORM_KEY_NONE
			)
				return emit('input', newValue)

			return context.setValue(props.formKey, newValue)
		}),
		suffix: computed(() => props.suffix),
		tabIndex: computed(() => props.tabIndex),
		validation,
	})

	onMounted(() => {
		if (context) context.onAddField(field)
	})

	onUnmounted(() => {
		if (context) context.onRemoveField(field)
	})

	return field
}

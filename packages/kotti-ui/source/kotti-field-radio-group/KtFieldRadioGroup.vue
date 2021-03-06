<template>
	<KtField
		v-bind="{ field }"
		:getEmptyValue="() => null"
		:helpTextSlot="$slots.helpText"
		isGroup
	>
		<div
			slot="container"
			:class="wrapperClasses"
			:forceUpdateKey="forceUpdateKey"
		>
			<label
				v-for="option in options"
				:key="option.value"
				class="kt-field-radio-group__wrapper__label"
				:class="{
					'kt-field-radio-group__wrapper__label--disabled':
						field.isDisabled || Boolean(option.isDisabled),
				}"
			>
				<div
					class="kt-field-radio-group__wrapper__radio"
					:class="{
						'kt-field-radio-group__wrapper__radio--checked':
							field.currentValue === option.value,
					}"
				>
					<div class="kt-field-radio-group__wrapper__radio__inside" />
				</div>
				<div v-text="option.label" />
				<FieldHelpText v-if="option.tooltip" :helpText="option.tooltip" />
				<input
					v-bind="inputProps"
					:checked="field.currentValue === option.value"
					:disabled="field.isDisabled || Boolean(option.isDisabled)"
					:value="option.value"
					@change="onChange(option.value)"
				/>
			</label>
		</div>
	</KtField>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'

import { KtField } from '../kotti-field'
import FieldHelpText from '../kotti-field/components/FieldHelpText.vue'
import { KOTTI_FIELD_PROPS } from '../kotti-field/constants'
import { useField, useForceUpdate } from '../kotti-field/hooks'

import { KOTTI_FIELD_RADIO_GROUP_SUPPORTS } from './constants'
import { KottiFieldRadioGroup } from './types'

let nameIndex = 0

export default defineComponent({
	name: 'KtFieldRadioGroup',
	components: {
		FieldHelpText,
		KtField,
	},
	props: {
		...KOTTI_FIELD_PROPS,
		isInline: { default: false, type: Boolean },
		options: {
			required: true,
			type: Array,
			validator: (options: KottiFieldRadioGroup.Props['options']) =>
				[...new Set(options.map(({ value }) => value))].length ===
				options.length,
		},
		value: { default: null, type: [Number, String, Boolean] },
	},
	setup(props: KottiFieldRadioGroup.Props, { emit }) {
		const field = useField<KottiFieldRadioGroup.Value>({
			emit,
			isCorrectDataType: (value): value is KottiFieldRadioGroup.Value =>
				['number', 'string', 'boolean'].includes(typeof value) ||
				value === null,
			isEmpty: (value) => value === null,
			props,
			supports: KOTTI_FIELD_RADIO_GROUP_SUPPORTS,
		})

		const { forceUpdate, forceUpdateKey } = useForceUpdate()
		const name = ref(`autoGeneratedRadioName${nameIndex++}`)

		return {
			field,
			forceUpdateKey: forceUpdateKey.value,
			inputProps: computed(
				(): Partial<HTMLInputElement & { class: string }> => ({
					...field.inputProps,
					class: 'kt-field-radio-group__wrapper__input',
					name: name.value,
					type: 'radio',
				}),
			),
			onChange: (value: KottiFieldRadioGroup.Entry['value']) => {
				field.setValue(value)

				forceUpdate()
			},
			wrapperClasses: computed(() => ({
				'kt-field-radio-group__wrapper': true,
				'kt-field-radio-group__wrapper--inline': props.isInline,
			})),
		}
	},
})
</script>

<style lang="scss">
@import '../kotti-field/mixins';

:root {
	--radio-size: 0.8rem;
	--radio-inside-side: 0.2rem;
}

.kt-field-radio-group__wrapper {
	display: flex;

	&--inline {
		flex-direction: row;

		.kt-field-radio-group__wrapper__label:not(:first-child) {
			margin-left: 1rem;
		}
	}

	&:not(&--inline) {
		flex-direction: column;

		.kt-field-radio-group__wrapper__label:not(:first-child) {
			margin-top: 0.4rem;
		}
	}

	&__label {
		display: flex;
		align-items: center;

		cursor: pointer;

		&--disabled {
			color: var(--text-05);
			cursor: not-allowed;

			.kt-field-radio-group__wrapper__radio {
				border-color: var(--ui-02);

				&--checked {
					background-color: var(--ui-02);
					box-shadow: var(--shadow-base);
				}
			}
		}

		> *:not(:first-child) {
			margin-left: 0.3rem;
		}
	}

	&__input {
		display: none;
	}

	&__radio {
		display: grid;
		place-items: center;
		width: var(--radio-size);
		height: var(--radio-size);
		background-color: var(--ui-background);
		border: 1px solid var(--ui-02);
		border-radius: 50%;
		transition: all ease-in-out var(--transition-short);

		&__inside {
			display: block;
			width: var(--radio-inside-side);
			height: var(--radio-inside-side);
			background-color: var(--ui-background);
			border-radius: 50%;
		}

		&--checked {
			background-color: var(--interactive-01);
			border-color: var(--interactive-01);
			box-shadow: var(--shadow-base);
		}
	}
}

.kt-field__wrapper {
	@include validations using ($type) {
		@if $type != empty {
			&:not(.kt-field__wrapper--disabled) {
				.kt-field-radio-group__wrapper {
					/* stylelint-disable */
					&__radio {
						border-color: var(--support-#{$type});

						&--checked {
							background-color: var(--support-#{$type});
							box-shadow: var(--shadow-base);
						}
					}
					/* stylelint-enable */
				}
			}
		}
	}
}
</style>

<template>
	<div :class="bannerClass">
		<div class="kt-banner__collapse">
			<i class="yoco" v-text="icon" />
			<div class="kt-banner__message" v-text="message" />
			<div v-if="!expandable" @click="() => $emit('click')">
				<KtButton v-if="actionText !== null" :label="actionText" type="text" />
			</div>
			<div v-else @click="isExpanded = !isExpanded">
				<KtButton v-if="!isExpanded" :label="switchOpenLabel" type="text" />
				<KtButton v-else :label="switchCloseLabel" type="text" />
			</div>
		</div>
		<div v-if="isExpanded" class="kt-banner__expand">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import { Yoco } from '@3yourmind/yoco'
import { computed, defineComponent, ref } from '@vue/composition-api'

import { KtButton } from '../kotti-button'
import { useTranslationNamespace } from '../kotti-translation/hooks'
import { isYocoIcon } from '../validators'

import { KottiBanner } from './types'

export default defineComponent<KottiBanner.PropsInternal>({
	name: 'KtBanner',
	components: {
		KtButton,
	},
	props: {
		actionText: { default: null, type: String },
		expandCloseLabel: { default: null, type: String },
		expandLabel: { default: null, type: String },
		icon: {
			default: Yoco.Icon.ANNOUNCE,
			type: String,
			validator: isYocoIcon,
		},
		isGray: { default: false, type: Boolean },
		message: { required: true, type: String },
	},
	setup(props, { slots }) {
		const translations = useTranslationNamespace('KtBanner')

		return {
			bannerClass: computed(() => ({
				'kt-banner': true,
				'kt-banner--is-gray': props.isGray,
			})),
			expandable: computed(() => Boolean(slots.default)),
			isExpanded: ref(false),
			switchCloseLabel: computed(
				() => props.expandCloseLabel ?? translations.value.expandCloseLabel,
			),
			switchOpenLabel: computed(
				() => props.expandLabel ?? translations.value.expandLabel,
			),
			Yoco,
		}
	},
})
</script>

<style lang="scss" scoped>
.kt-banner {
	display: flex;
	flex-direction: column;
	padding: var(--unit-2) var(--unit-4);
	background: var(--white);
	border: 1px solid var(--gray-20);
	border-radius: var(--border-radius);

	&--is-gray {
		background: var(--gray-20);
	}

	&__collapse {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
	}

	&__expand {
		margin-top: var(--unit-4);
	}

	&__message {
		flex: 1 1 100%;
		padding: 0 var(--unit-4);
		font-weight: 600;
		color: var(--gray-70);
	}

	.yoco {
		font-size: 1.2rem;
	}
}
</style>

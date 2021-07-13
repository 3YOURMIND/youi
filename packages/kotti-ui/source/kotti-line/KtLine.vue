<template>
	<div class="kt-line">
		<div v-if="position !== Position.LEFT" class="kt-line__line" />
		<div v-if="text" :class="textClasses" @click="handleClick" v-text="text" />
		<div v-if="position !== Position.RIGHT" class="kt-line__line" />
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'

import { KottiLine } from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validatePosition = (value: any): value is KottiLine.Position =>
	Object.values(KottiLine.Position).includes(value)

export default defineComponent<KottiLine.InternalProps>({
	name: 'KtLine',
	props: {
		isInteractive: { type: Boolean, default: false },
		position: {
			type: String,
			default: KottiLine.Position.CENTER,
			validator: validatePosition,
		},
		text: { type: String, default: null },
	},
	setup(props, { emit }) {
		return {
			handleClick: () => {
				if (props.isInteractive) emit('click')
			},
			textClasses: computed(() => ({
				'kt-line__text': true,
				'kt-line__text--is-interactive': props.isInteractive,
			})),
			Position: KottiLine.Position,
		}
	},
})
</script>

<style lang="scss" scoped>
.kt-line {
	display: flex;
	align-items: center;
	height: 0.8rem;
	margin: 0.2rem 0;

	&__line {
		flex: 1 1 auto;
		width: 100%;
		height: 1px;
		background: var(--ui-02);
	}

	&__text {
		flex: 1 0 auto;
		padding: 0 0.4rem;
		font-size: 0.6rem;
		color: var(--text-03);
		text-align: center;

		&--is-interactive {
			font-size: 0.8rem;
			color: var(--interactive-01);
			cursor: pointer;
		}
	}
}
</style>

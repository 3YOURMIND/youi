<template>
	<div class="kt-navbar-quick-link-tooltip" @click="(e) => $emit('click', e)">
		<i ref="triggerRef" class="yoco" v-text="icon" />
		<div ref="contentRef" v-text="label" />
	</div>
</template>

<script lang="ts">
import { useTippy } from '@3yourmind/vue-use-tippy'
import { Yoco } from '@3yourmind/yoco'
import { computed, defineComponent, ref } from '@vue/composition-api'
import { roundArrow } from 'tippy.js'

const ARROW_HEIGHT = 7

export default defineComponent<{
	label: string
	icon: Yoco.Icon
}>({
	name: 'NavbarTooltip',
	props: {
		icon: { required: true, type: String },
		label: { required: true, type: String },
	},
	setup() {
		const contentRef = ref<Element | null>(null)
		const triggerRef = ref<Element | null>(null)

		useTippy(
			triggerRef,
			computed(() => ({
				appendTo: () => document.body,
				arrow: roundArrow,
				content: contentRef.value,
				offset: [0, ARROW_HEIGHT],
				placement: 'right',
				theme: 'kt-navbar-tooltip',
			})),
		)

		return {
			contentRef,
			triggerRef,
		}
	},
})
</script>

<style lang="scss" scoped>
.kt-navbar-quick-link-tooltip {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>

<style lang="scss">
/* forked from tippy’s light-border theme */

$border: var(--gray-90);
$fill: var(--gray-90);
$text: var(--gray-10);
$shadow: var(--gray-100);

.tippy-box[data-theme~='kt-navbar-tooltip'] {
	color: $text;
	background-color: $fill;
	border: 1px solid $border;
	box-shadow: 0 4px 14px -2px $shadow;
}

.tippy-box[data-theme~='kt-navbar-tooltip'] > .tippy-backdrop {
	background-color: $fill;
}

.tippy-box[data-theme~='kt-navbar-tooltip'] > .tippy-arrow:after,
.tippy-box[data-theme~='kt-navbar-tooltip'] > .tippy-svg-arrow:after {
	position: absolute;
	z-index: -1;
	content: '';
}

.tippy-box[data-theme~='kt-navbar-tooltip'] > .tippy-arrow:after {
	border-color: transparent;
	border-style: solid;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='top']
	> .tippy-arrow:before {
	border-top-color: $border;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='top']
	> .tippy-arrow:after {
	top: 17px;
	left: 1px;
	border-width: 7px 7px 0;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='top']
	> .tippy-svg-arrow
	> svg {
	top: 16px;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='top']
	> .tippy-svg-arrow:after {
	top: 17px;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='bottom']
	> .tippy-arrow:before {
	bottom: 16px;
	border-bottom-color: $border;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='bottom']
	> .tippy-arrow:after {
	bottom: 17px;
	left: 1px;
	border-width: 0 7px 7px;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='bottom']
	> .tippy-svg-arrow
	> svg {
	bottom: 16px;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='bottom']
	> .tippy-svg-arrow:after {
	bottom: 17px;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='left']
	> .tippy-arrow:before {
	border-left-color: $border;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='left']
	> .tippy-arrow:after {
	top: 1px;
	left: 17px;
	border-width: 7px 0 7px 7px;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='left']
	> .tippy-svg-arrow
	> svg {
	left: 11px;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='left']
	> .tippy-svg-arrow:after {
	left: 12px;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='right']
	> .tippy-arrow:before {
	right: 16px;
	border-right-color: $border;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='right']
	> .tippy-arrow:after {
	top: 1px;
	right: 17px;
	border-width: 7px 7px 7px 0;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='right']
	> .tippy-svg-arrow
	> svg {
	right: 11px;
}

.tippy-box[data-theme~='kt-navbar-tooltip'][data-placement^='right']
	> .tippy-svg-arrow:after {
	right: 12px;
}

.tippy-box[data-theme~='kt-navbar-tooltip'] > .tippy-svg-arrow {
	fill: $fill;
}

.tippy-box[data-theme~='kt-navbar-tooltip'] > .tippy-svg-arrow:after {
	width: 16px;
	height: 6px;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);
	background-size: 16px 6px;
}
</style>

<template>
	<div class="back">
		<div class="container" id="main-popup" :style="{marginTop: marginTop+'px'}">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from "@vue/runtime-core"

let marginTop: Ref<number> = ref(0)

onMounted(() => {
	marginTop.value = window.screenY > document.getElementById('main-popup').clientHeight ? 
		(window.innerHeight - document.getElementById('main-popup').clientHeight) / 2 : 
		50
	marginTop.value += window.screenTop
})
</script>

<style lang="scss" scoped>
.back {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba($color: #000000, $alpha: 0.5);
	z-index: 9;
}
.container {
	background: #FFFFFF;
	border-radius: 14px;
	padding: rem(30) rem(50);
}
</style>
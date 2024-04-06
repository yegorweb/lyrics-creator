<script setup lang="ts">
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import PopupContainer from '@/components/PopupContainer.vue';
import { Ref, ref } from '@vue/reactivity';

/** Выполняет загрузку файла с помощью нажатия на ссылку */
function download(path: string, filename: string): void {
	const link = document.createElement('a')
	link.href = path
	link.download = filename

	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
} 

let file = new File(['Anna amogus'], 'lyrics.lrc', { type: 'text/lrc' })
let url = URL.createObjectURL(file)

download(url, 'lyrics.lrc')

let popup_container_is_active: Ref<boolean> = ref(false)
</script>

<template>
	<PopupContainer v-if="popup_container_is_active" />
	<div class="home">
		<Header></Header>
		<div class="hero_section container">
			<section class="left">
				<ul class="title">
					<ul>Simple.</ul>
					<ul>Comfortable.</ul>
					<ul>Fast.</ul>
				</ul>

				<ul class="how_to">
					<li>Import music</li>
					<li>Type information about song</li>
					<li>Paste lyrics and set timecodes</li>
					<li>Enjoy!</li>
				</ul>

				<Button 
					color="#3B56B8" 
					bg="#FFFFFF" 
					:marginTop="35" 
					@click="popup_container_is_active = !popup_container_is_active"
				>
					Start!
				</Button>
				<a :href="url">Click</a>

			</section>    
			<section class="right">
				<!-- TODO сделать позже -->
			</section>    
		</div>
	</div>
</template>    

<style lang="scss" scoped>
.home {
	background: url('@/assets/home-background.svg') 50% 100% no-repeat;
	background-size: cover;
	padding-bottom: rem(100);
}
.hero_section {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	column-gap: rem(70);
	margin-top: rem(72);
}
.left {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}
.title {
	list-style-type: none;
	
	& > * {
		font-family: 'Space Mono';
		font-style: normal;
		font-weight: 700;
		font-size: rem(46);
		color: #FFFFFF;
		line-height: 1;
	}
}
ul {
	padding: 0;
	margin: 0;
}
.how_to {
	list-style-type: decimal;
	list-style-position: inside;
	margin-top: rem(30);

	& > * {
		font-family: 'Space Mono';
		font-style: normal;
		font-weight: 400;
		font-size: 26px;
		color: #FFFFFF;
	}
}
</style>
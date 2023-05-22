<template>
	<site-header />
	
	<main class="wrapper" v-scroll>
		<div class="wrapper2">
			<main-section />
			<card-section />
			<info-section />
		</div>
	</main>

	<order-button />
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import MainSection from './components/home/MainSection.vue'
import CardSection from './components/home/CardSection.vue'
import InfoSection from './components/home/InfoSection.vue'
import orderButton from './components/home/orderButton.vue'
import scroll from './assets/directives/scrollAnim'

// import gsap from "gsap-trial";

// import ScrollSmoother from "gsap-trial/ScrollSmoother";
// import ScrollTrigger from "gsap-trial/ScrollTrigger";

// gsap.registerPlugin(ScrollSmoother, ScrollTrigger); 

export default {
	name: 'App',
	components: {
		SiteHeader,
		MainSection,
		CardSection,
		InfoSection,
		orderButton
	},
	directives: {
		scroll
	},
	// mounted(){
	// 	ScrollSmoother.create({
	// 		wrapper: '.wrapper',
	// 		content: '.wrapper2',
	// 		smooth: 2,
	// 		effects: true,
	// 	});
	// }
}
</script>

<style lang="scss" scoped>

</style>

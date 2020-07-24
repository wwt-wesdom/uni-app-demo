<template>
	<view>
		noTabbar
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		created() {
			console.log(11111111)
			this.$Tabbar.remove();
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

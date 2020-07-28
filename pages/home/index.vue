<template>
	<view>
		<button type="default" @click="changeUrl">noTabbar</button>
		<view>home</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		created() {
			
		},
		methods: {
			changeUrl() {
				uni.navigateTo({
					url: '/pages/noTabbar/noTabbar'
				})
			}
		}
	}
</script>

<style>

</style>

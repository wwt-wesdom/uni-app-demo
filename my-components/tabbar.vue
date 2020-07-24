<template>
	<div class="tabbar">
		<div class="tabbar-item" v-for="(item, index) in tabbarList" @click="changeTabbar(index)">
			<img :src="activeTabbar === index ? item.activeImg : item.img" alt="">
			<p class="title" :style="{color: item.color}">{{item.title}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeTabbar: 0,
				tabbarList: [{
						img: '../static/images/tabbar/home.png',
						activeImg: '../static/images/tabbar/home_active.png',
						title: '首页',
						path: '/pages/index/index',
						color: 'red',
					},
					{
						img: '../static/images/tabbar/category.png',
						activeImg: '../static/images/tabbar/category_active.png',
						title: '分类',
						path: '/pages/category/index',
						color: 'yellow',
					},
					{
						img: '../static/images/tabbar/find.png',
						activeImg: '../static/images/tabbar/find_active.png',
						title: '发现',
						path: '/pages/find/index',
						color: 'blue',
					},
					{
						img: '../static/images/tabbar/personal.png',
						activeImg: '../static/images/tabbar/personal_active.png',
						title: '个人中心',
						path: '/pages/personal/index',
						color: 'green',
					},
				]
			}
		},
		created() {
			let index = getApp().globalData.activeTabbar
			this.activeTabbar = index;
			console.log(this.activeTabbar)
			// console.log(index, '========')
			// this.changeTabbar(index);
		},
		methods: {
			changeTabbar(index) {
				const that = this;
				this.activeTabbar = index;
				getApp().globalData.activeTabbar = index;
				uni.navigateTo({
					url: that.tabbarList[index].path
				})
			}
		}
	}
</script>

<style scoped>
	.tabbar {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx;
	}

	.tabbar-item {
		flex: 1;
		text-align: center;
	}

	img {
		display: inline-block;
		width: 50rpx;
		height: 50rpx;
		vertical-align: top;
	}
	.title {
		font-size: 28rpx;
	}
</style>

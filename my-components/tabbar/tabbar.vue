<template>
	<div>
		<template v-if="currentTabbarList.length > 0">
			<div class="tabbar">
				<div class="tabbar-item" v-for="(item, index) in currentTabbarList" @click="changeTabbar(index)">
					<img :src="activeTabbar === index ? item.activeImg : item.img" alt="">
					<p class="title" :style="{color: item.color}">{{item.title}}</p>
				</div>
			</div>
		</template>
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
						path: '/pages/home/index',
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
				],
				currentTabbarList: []
			}
		},
		created() {
			// this.add();
		},
		methods: {
			changeTabbar(index) {
				const that = this;
				this.activeTabbar = index;
				let url = that.currentTabbarList[index].path;
				uni.redirectTo({
					url: url
				})
			},
			/**
			 * 添加导航栏信息，需要copy一份
			 */
			add() {
				this.currentTabbarList = JSON.parse(JSON.stringify(this.tabbarList))
			},
			remove() {
				this.currentTabbarList = [];
			}
		},
	}
</script>

<style scoped>
	.tabbar {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 50px;
		background-color: #000
	}

	.tabbar-item {
		flex: 1;
		text-align: center;
	}

	img {
		display: inline-block;
		width: 25px;
		height: 25px;
		vertical-align: top;
	}
	.title {
		height: 25px;
		line-height: 25px;
		font-size: 14px;
	}
</style>

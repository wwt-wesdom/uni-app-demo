<template>
	<view class="container">
		<div v-for="(item, index) in compList">
			<component v-show="index === activeTabbar" :is='item'></component>
		</div>
		<div class="tabbar">
			<div class="tabbar-item" v-for="(item, index) in tabbarList" @click="changeTabbar(index, item)">
				<img :src="activeTabbar === index ? item.activeImg : item.img" alt="">
				<p class="title" :style="{color: item.color}">{{item.title}}</p>
			</div>
		</div>
	</view>
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
				compList: []
			}
		},
		created() {
			this.getComponents()
		},
		computed: {
			currTemplate() {
				return this.compList.filter((item, index) => {
					if (index === this.activeTabbar) {
						return item;
					}
				})
			}
		},
		methods: {
			/**
			 * 根据返回值动态加载组件（注意路由的格式，根据路由后台返回更改数据处理方式）首次加载第一组件
			 */
			getComponents() {
				let path = this.tabbarList[0].path.replace('/pages/', '')
				import(`../${path}.vue`).then(module => {
						this.compList.push(module.default);
					})
					.catch(err => {
						console.log(err.message)
					});
			},
			changeTabbar(index, item) {
				uni.setNavigationBarTitle({
					title: item.title
				});
				this.activeTabbar = index;
				// 判断当前组件是否加载，已加载不再加载
				if (!this.compList[index]) {
					let path = item.path.replace('/pages/', '')
					import(`../${path}.vue`).then(module => {
							this.compList.push(module.default);
						})
						.catch(err => {
							console.log(err.message)
						});
				}
			},
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}

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

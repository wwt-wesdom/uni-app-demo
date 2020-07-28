<script>
import router from './static/js/router.js'
export default {
	globalData: {  
	  activeTabbar: 0  
	},
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
		console.log(this.$router)
		if(router.noTabbarPageList.indexOf(this.$router.history.current.path) >= 0) {
			this.$Tabbar.remove()
		} else {
			this.$Tabbar.add();
		}
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
</style>

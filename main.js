import Vue from 'vue'
import App from './App'
// import Tabbar from './my-components/tabbar/tabbar.js'
// import router from './static/js/router.js'


Vue.config.productionTip = false
// Vue.prototype.$Tabbar = Tabbar;

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

/* app.$router.beforeEach(function(to, from, next){
	if(router.noTabbarPageList.indexOf(to.path) >= 0) {
		Tabbar.remove()
	} else {
		Tabbar.add();
	}
	next();
}) */

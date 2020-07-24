import Vue from 'vue'
import App from './App'
import tabbar from './my-components/tabbar.vue'

Vue.config.productionTip = false
Vue.component('tabbar', tabbar)

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

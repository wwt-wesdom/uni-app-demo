import Vue from 'vue'
import App from './App'
import tabbar from './my-components/tabbar.vue'
import Alert from "./my-components/alert/alert.js";
// import alert from "./my-components/alert/Alert.vue"
const Instance = Vue.extend({
    render(h) {
      return h(tabbar)
    }
  });
  const component = new Instance();
  document.body.appendChild(component.$mount().$el);
  // const alert = component.$children[0];

Vue.config.productionTip = false
// Vue.component('tabbar', tabbar)
Vue.prototype.$Alert = Alert.info

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

import Tabbar from './tabbar.vue'
import Vue from 'vue'
Tabbar.newInstance = properties => {
  const props = properties || {};
  /**
   *  Vue.extend创建一个组件，需实例化组件，实例化以后需要手动$mount，渲染组件
   *  component.$el拿到节点 component.$children[0] 拿到组件实例
   */
  const Instance = Vue.extend({
    data() {
      return {
        props
      }
    },
    render(h) {
      return h(Tabbar, {
        props
      })
    }
  });
  const component = new Instance();
  document.body.appendChild(component.$mount().$el);
  const tabbar = component.$children[0]; // tabbar组件实例
  return {
    add () {
      tabbar.add();
    },
    remove () {
      tabbar.remove();
    }
  }
};
export default Tabbar;


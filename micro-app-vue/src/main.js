import './publci-path'
import Vue from 'vue'
import App from './App'
import {routes} from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

let router = null;
let instance = null;
/* 渲染函数 */
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',  // 运行在主应用中时，添加路由命名空间 /app-vue
    mode: 'history',
    routes,
  });
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app'); // 为了避免根id #app 与其他的 DOM 冲突，限制查找范围
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
export async function bootstrap() {
  console.log('进入vue app 子应用的bootstrap周期');
}
// 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
export async function mount(props) {
  console.log('进入vue app 子应用的mount周期', props);
  render(props);
}
// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
export async function unmount() {
  console.log('进入vue app 子应用的unmount周期');
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
//重置默认样式
import 'normalize.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
//简单配置axios的使用
Vue.prototype.$http = axios

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
export { app, router, store }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './stores/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Vuex)
Vue.use(ElementUI)

axios.defaults.baseURL = 'http://192.168.199.222:3000'
axios.defaults.headers.post['Content-Type'] = 'http://192.168.199.222:3000/register/submit'
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  saveScrollPosition: true,
  routes: routers
})

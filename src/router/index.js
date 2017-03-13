import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/web/Index'
import Register from '@/views/web/Register'
import Login from '@/views/web/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

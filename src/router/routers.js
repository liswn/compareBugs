/**
 * Created by lwj on 2017/3/16.
 */
import Index from '@/views/web/Index'
import Register from '@/views/web/Register'
import Login from '@/views/web/Login'
import HomePage from '@/views/web/HomePage'

export default [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [{
      path: '/',
      name: '/HomePage',
      component: HomePage
    }]
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

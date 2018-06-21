import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Wallet from '@/components/Wallet'
import test from '@/components/test'
import prueba from '@/components/prueba'
import Register from '@/components/Register'
import Login from '@/components/logIn'
import dashboard from '@/components/dashboard'
// Bootstrap
import BoostrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BoostrapVue)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Wallet',
      name: 'Wallet',
      component: Wallet
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/prueba',
      name: 'prueba',
      component: prueba
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})

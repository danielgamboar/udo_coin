import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Wallet from '@/components/Wallet'
import test from '@/components/test'
import BoostrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BoostrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
    }
  ]
})

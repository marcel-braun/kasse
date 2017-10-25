import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Update from '@/components/Update'
import Settings from '@/components/Settings'
import Customers from '@/components/Customers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    }
  ]
})

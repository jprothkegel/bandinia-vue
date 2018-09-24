import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Aktiven from '@/components/Aktiven'
import HomePage from '@/components/HomePage'
import QuienesSomos from '@/components/QuienesSomos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/aktiven',
      name: 'Aktiven',
      component: Aktiven
    },
    {
      path: '/qs',
      name: 'QuienesSomos',
      component: QuienesSomos
    }
  ],
  mode: 'history'
})

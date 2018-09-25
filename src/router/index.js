import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Aktiven from '@/components/aktiv/Aktiven'
import HomePage from '@/components/homePage/HomePage'
import QuienesSomos from '@/components/quienesSomos/QuienesSomos'
import Historias from '@/components/historia/Historias'
import Hogar from '@/components/hogar/Hogar'

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
    },
    {
      path: '/historia',
      name: 'Historias',
      component: Historias
    },
    {
      path: '/hogar',
      name: 'Hogar',
      component: Hogar
    }
  ],
  mode: 'history'
})

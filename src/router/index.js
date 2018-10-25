import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Aktiven from '@/components/aktiv/Aktiven'
import HomePage from '@/components/homePage/HomePage'
import QuienesSomos from '@/components/quienesSomos/QuienesSomos'
import Historias from '@/components/historia/Historias'
import Hogar from '@/components/hogar/Hogar'
import Galleries from '@/components/gallery/Galleries'
import { globalAgent } from 'https';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        title: 'Burschenschaft Andinia zu Santiago'
      }
    },
    {
      path: '/aktiven',
      name: 'Aktiven',
      component: Aktiven,
      meta: {title: 'Burschenschaft Andinia zu Santiago'}
    },
    {
      path: '/qs',
      name: 'QuienesSomos',
      component: QuienesSomos,
      meta: {title: 'Burschenschaft Andinia zu Santiago'}
    },
    {
      path: '/historia',
      name: 'Historias',
      component: Historias,
      meta: {title: 'Burschenschaft Andinia zu Santiago'}
    },
    {
      path: '/hogar',
      name: 'Hogar',
      component: Hogar,
      meta: {title: 'Burschenschaft Andinia zu Santiago'}
    },
    {
      path: '/galeria',
      name: 'Galleries',
      component: Galleries,
      meta: {title: 'Burschenschaft Andinia zu Santiago'}
    }
  ],
  mode: 'history'
})

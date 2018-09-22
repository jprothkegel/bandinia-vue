import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Aktiven from '@/components/Aktiven'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aktiven',
      name: 'Aktiven',
      component: Aktiven
    },
    {
      path: '/inicio',
      name: 'HomePage',
      component: HomePage
    }
  ],
  mode: 'history'
})

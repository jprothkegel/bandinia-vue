import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Aktiven from '@/components/Aktiven'

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
    }
  ],
  mode: 'history'
})

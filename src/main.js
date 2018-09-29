// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import {store} from './store'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify, axios,{iconfont: 'fa'})


export const axiosConfig = axios.create({
  baseURL:'https://deliver.kenticocloud.com/8ea21de5-9b35-00db-c1c1-52597ac64a72/items'
})
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

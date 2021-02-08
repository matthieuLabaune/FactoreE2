import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

import Example from './views/Example.vue'
import DesignList from './views/DesignList.vue'
import DesignEdit from './views/DesignEdit.vue'

import Axios from 'axios'
import LoginForm from "./components/LoginForm"
import Login from "./components/Login"

Vue.prototype.$http = Axios;
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Login },
  { path: '/index', component: Example },
  { path: '/dashboard', component: DesignList },
  { path: '/dashboard/new', component: DesignEdit },
  { path: '/dashboard/edit/:designId', component: DesignEdit },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter)

new Vue({
  router
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import {routes} from './router/index'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue);
const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

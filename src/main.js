import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import VueSidebarMenu from 'vue-sidebar-menu'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue).use(VueSidebarMenu)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

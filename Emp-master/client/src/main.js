import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource);

Vue.config.productionTip = false

Vue.use(VueRouter);
import { routes }  from './routes'

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  router,
 render: h => h(App),
}).$mount('#app')

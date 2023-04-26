import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import "../node_modules/vuetify/dist/vuetify.min.css";
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
});

Vue.use(VueResource);

Vue.config.productionTip = false

Vue.use(VueRouter);
import { routes }  from './routes'
import vuetify from './plugins/vuetify'

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

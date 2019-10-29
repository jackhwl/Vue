import Vue from '../../axios--01-start/node_modules/vue'
import VueRouter from '../../axios--01-start/node_modules/vue-router';
import VueResource from '../../axios--01-start/node_modules/vue-resource';

import App from './App.vue';
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://udemy-vue-stock-trader-7de18.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

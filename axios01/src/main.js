import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = "https://udemy-vue-stock-trader-7de18.firebaseio.com";
axios.defaults.headers.common['Authorization'] = 'sd';
axios.defaults.headers.get['Accepts'] = 'applicaton/json';

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config);
  return config;
});
const resInterceptor = axios.interceptors.response.use(config => {
  console.log('Response Interceptor', config);
  return config;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

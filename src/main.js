import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import axios from 'axios';

axios.defaults.baseURL = 'https://wd1516159019qafinc.wilddogio.com/';
// 在任何一个组件中使用axios
Vue.prototype.http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

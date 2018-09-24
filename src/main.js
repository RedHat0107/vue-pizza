import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import axios from 'axios';

axios.defaults.baseURL = 'https://wd1516159019qafinc.wilddogio.com/';
// 在任何一个组件中使用axios
Vue.prototype.http = axios;

Vue.config.productionTip = false;

// 全局守卫
// router.beforeEach((to, from, next) => {
//   /* alert('还没有登录,请先登录!!!');
//   next(); */
//   // 判断store.getters.isLogin === false
//   if (/^\/((login)|(register))$/g.test(to.path)) {
//     next();
//   }else {
//     alert('还没有登录,请先登录!!!');
//     next('/login');
//   }
// })

// 后置钩子
// router.afterEach((to,from)=> {
//   alert('after each');
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

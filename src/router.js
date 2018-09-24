import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import About from './components/about/About.vue';
import Menu from './components/Menu.vue';
import Admin from './components/Admin.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import store from './store/store';

// 引入二级路由
import Contact from './components/about/Contact.vue';
import Delivery from './components/about/Delivery.vue';
import History from './components/about/History.vue';
import OrderingGuide from './components/about/OrderingGuide.vue';

// 引入三级路由
import Phone from './components/about/contact/Phone.vue';
import PersonName from './components/about/contact/PersonName.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
     return {x: 0,y:100,}
    // return {selector:'btn'}

    /* if (savedPosition) {  //当点击浏览器的前进后退的时候,会触发savedPostion 保留原来的位置,回退的时候依然回退到原来的位置
      return savedPosition;
    } else {
      return {x:0,y:0}
    } */
  },
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        "orderingGuide": OrderingGuide,
        "delivery": Delivery,
        "history": History,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      redirect: '/about/contact',
      children: [
        {
          path: '/about/contact',
          name: 'contactLink',
          component: Contact,
          redirect: '/personname',
          children: [
            {path:'/phone',name:'phoneNumber',component:Phone},
            {path:'/personname',name:'personName',component:PersonName}
          ]
        },
        {
          path: '/about/delivery',
          name: 'deliveryLink',
          component:Delivery
        },
        {
          path: '/about/history',
          name: 'historyLink',
          component:History
        },
        {
          path: '/about/oderingguide',
          name: 'orderingGuideLink',
          component:OrderingGuide
        },
      ]
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      beforeEnter: (to, from, next) => {
        if (store.getters.isLogin) {
          next();
        } else {
          alert('还没有登录,请登录!');
          next('/login');
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter: (to, from, next) => {
        if (store.getters.isLogin) {
          next();
        } else {
          alert('还没有登录,请登录!');
          next('/login');
        }
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

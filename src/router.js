import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome
    }
  ]
});

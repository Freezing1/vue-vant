import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRouterMap = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页',
      keepAlive: false,
      auth: false
    }
  },
  {
    path: '/toast',
    name: 'Toast',
    component: () => import('@/views/Toast.vue'),
    meta: {
      title: 'toast',
      keepAlive: false,
      auth: false
    }
  },
  {
    path: '/svg',
    name: 'Svg',
    component: () => import('@/views/Svg.vue'),
    meta: {
      title: 'svg',
      keepAlive: false,
      auth: false
    }
  }
  ]
  
export default new Router({
  // mode: 'hash',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

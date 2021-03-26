import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meat',
    name: 'meat',
    component: () => import('@/views/Meat.vue')
  },
  {
    path: '/sidedish',
    name: 'sidedish',
    component: () => import('@/views/Sidedish.vue')
  },
  {
    path: '/fresh',
    name: 'fresh',
    component: () => import('@/views/Fresh.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart.vue')
  },
  {
    path: '/Detailpage',
    name: 'Detailpage',
    component: () => import('@/views/Detailpage.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router

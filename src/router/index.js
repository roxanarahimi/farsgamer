import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
 {
    path: '/accounting',
    name: 'Accounting',
    component: () => import(/* webpackChunkName: "accounting" */ '../views/Accounting.vue')
  },
 {
    path: '/ads',
    name: 'Advertisements',
    component: () => import(/* webpackChunkName: "advertisements" */ '../views/Advertisements.vue')
  },
 {
    path: '/dealings',
    name: 'Dealings',
    component: () => import(/* webpackChunkName: "dealings" */ '../views/Dealings.vue')
  },
{
    path: '/support',
    name: 'Support',
    component: () => import(/* webpackChunkName: "support" */ '../views/Support.vue')
  },

{
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
const routes = [
    {
        path: '/',
        name: 'Home',
        // component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
        component: Home
    }, {
        path: '/dashboard',
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
    {
        path: '/ad/:id',
        name: 'Advertisement',
        component: () => import(/* webpackChunkName: "advertisement" */ '../views/Ad.vue'),
        props: true,
        params:true,
    },
    {
        path: '/ad+',
        name: 'CreateAd',
        component: () => import(/* webpackChunkName: "createAd" */ '../views/CreateAd.vue')
    },
    {
        path: '/deal/:id',
        name: 'Deal',
        component: () => import(/* webpackChunkName: "deal" */ '../views/Deal.vue'),
        props: true,
        params:true,
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import(/* webpackChunkName: "chat" */ '../views/Chat.vue')
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

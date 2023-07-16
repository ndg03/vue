import Vue from "vue";
import VueRouter from "vue-router";
import Register from '../views/RegisterVue.vue'
import Login from '../views/LoginVue.vue'
import Home from '../views/HomeVue.vue'
import Goods from "../views/GoodsVue.vue"

Vue.use(VueRouter)

const routes = [{
        path: '/register',
        component: Register //component 组件 ，不要写错了
    },
    {
        path: '/',
        redirect: '/home' //重定向
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/goods',
        component: Goods
    }
]

const router = new VueRouter({
    routes: routes,
    mode: 'hash', //默认为hash模式  /#/reg
})

export default router
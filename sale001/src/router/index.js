import Vue from 'vue'
import VueRouter from 'vue-router'

import RegisterVue from '../views/RegisterVue.vue'
import LoginVue from '../views/LoginVue.vue'
import HomeGoods from '../views/HomeGoods.vue'
Vue.use(VueRouter)

const routes = [{
        path: "/home/goods",
        component: HomeGoods
    },
    {
        path: '/Register',
        name: 'Register',
        component: RegisterVue
    },
    {
        path: '/Login',
        name: 'Login',
        component: LoginVue
    }
]

const router = new VueRouter({
    routes,
    mode: "hash"
})

export default router;
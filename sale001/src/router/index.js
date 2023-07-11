import Vue from 'vue'
import VueRouter from 'vue-router'

import RegisterVue from '../views/RegisterVue.vue'
import LoginVue from '../views/LoginVue.vue'

Vue.use(VueRouter)

const routes = [{
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
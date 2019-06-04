import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/home'
import Category from '../views/category'
import Detail from '../views/detail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home/'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/category',
            name: 'category',
            component: Category,
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail,
        },
        {
            path: '*',
            redirect: '/home/'
        }
    ]
})

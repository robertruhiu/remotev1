import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('@/components/homepages/Home')
const ClientDashboard = () => import('@/components/client/ClientDashboard')
const DeveloperDashboard = () => import('@/components/developer/DeveloperDashboard')

Vue.use(Router);

let router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/',
            name: 'ClientDashboard',
            component: ClientDashboard
        },
        {
            path: '/',
            name: 'DeveloperDashboard',
            component: DeveloperDashboard
        },

    ],


})




export default router

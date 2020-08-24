import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('@/components/homepages/Home')
const ClientDashboard = () => import('@/components/client/ClientDashboard')
const DeveloperDashboard = () => import('@/components/developer/DeveloperDashboard')
const TrackerBoard = () => import('@/components/client/trackerboard/trackerboard')
const MyProjects = () => import('@/components/client/MyProjects')
const Bids = () => import('@/components/client/Bids')
const CreateProject = () => import('@/components/client/CreateProject')
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
            path: '/Dashboard',
            name: 'Dashboard',
            component: ClientDashboard
        },
        {
            path: '/Developer',
            name: 'Developer',
            component: DeveloperDashboard
        },
        {
            path: '/ProjectBoard',
            name: 'ProjectBoard',
            component: TrackerBoard
        },
        {
            path: '/Myprojects',
            name: 'Myprojects',
            component: MyProjects
        },
        {
            path: '/Bids',
            name: 'Bids',
            component: Bids
        },
        {
            path: '/Create',
            name: 'Create',
            component: CreateProject
        },

    ],


})




export default router

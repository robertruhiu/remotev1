import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('@/components/homepages/Home')
const Jobs = () => import('@/components/homepages/Jobboard')
const ClientDashboard = () => import('@/components/client/ClientDashboard')
const DeveloperDashboard = () => import('@/components/developer/DeveloperDashboard')
const TrackerBoard = () => import('@/components/client/trackerboard/trackerboard')
const MyProjects = () => import('@/components/client/MyProjects')
const Bids = () => import('@/components/client/Bids')
const CreateProject = () => import('@/components/client/CreateProject')
const Contract = () => import('@/components/client/Contract')
const DeveloperProjects = () => import('@/components/developer/Developerprojects')
const DevContract = () => import('@/components/developer/DevContract')
const Draw = () => import('@/components/Draw/Draw')
const Video = () => import('@/components/shared/Videocall')
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
            path: '/Jobs',
            name: 'Jobs',
            component: Jobs
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
            path: '/DeveloperProjects',
            name: 'DeveloperProjects',
            component: DeveloperProjects
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
        {
            path: '/Contract',
            name: 'Contract',
            component: Contract
        },
        {
            path: '/DevContract',
            name: 'DevContract',
            component: DevContract
        },
        {
            path: '/Draw',
            name: 'Draw',
            component: Draw
        },
        {
            path: '/Video',
            name: 'Video',
            component: Video
        },

    ],
    scrollBehavior( ) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({x: 0, y: 0})
            }, 1)
        })
    }


})




export default router

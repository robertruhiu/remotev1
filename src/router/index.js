import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('@/components/homepages/Home')
const Jobs = () => import('@/components/homepages/Jobboard')
const ClientDashboard = () => import('@/components/client/ClientDashboard')
const DeveloperDashboard = () => import('@/components/developer/DeveloperDashboard')
const DeveloperEscrow = () => import('@/components/developer/EscrowDev')
const TrackerBoard = () => import('@/components/shared/trackerboard/trackerboard')
const Bugs = () => import('@/components/shared/Bugs')
const MyProjects = () => import('@/components/client/MyProjects')
const Bids = () => import('@/components/client/Bids')
const CreateProject = () => import('@/components/client/CreateProject')
const Escrow = () => import('@/components/client/Escrow')
const Contract = () => import('@/components/client/Contract')
const DeveloperProjects = () => import('@/components/developer/Developerprojects')
const DevContract = () => import('@/components/developer/DevContract')
const Video = () => import('@/components/shared/Videocall')
const Meeting = () => import('@/components/shared/meeting/meeting')

// admin view imports
const Admindashboard = () => import('@/components/admin/adminDashboard')
// const AdminEscrow = () => import('@/components/admin/escrow')
// const AdminIssues = () => import('@/components/admin/issues')
// const AdminProjects = () => import('@/components/admin/projects')
// const AdminTracker = () => import('@/components/admin/trackboard')
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
            path: '/DeveloperEscrow',
            name: 'DeveloperEscrow',
            component: DeveloperEscrow
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
            path: '/Escrow',
            name: 'Escrow',
            component: Escrow
        },
        {
            path: '/DevContract',
            name: 'DevContract',
            component: DevContract
        },
        {
            path: '/Video',
            name: 'Video',
            component: Video
        },
        {
            path: '/Bugs',
            name: 'Bugs',
            component: Bugs
        },
        {
            path: '/Meeting',
            name: 'Meeting',
            component: Meeting
        },
        // admin routes
        {
            path: '/Admindashboard',
            name: 'Admindashboard',
            component: Admindashboard
        },
        // {
        //     path: '/AdminEscrow',
        //     name: 'AdminEscrow',
        //     component: AdminEscrow
        // },
        // {
        //     path: '/AdminIssues',
        //     name: 'AdminIssues',
        //     component: AdminIssues
        // },
        // {
        //     path: '/AdminProjects',
        //     name: 'AdminProjects',
        //     component: AdminProjects
        // },
        // {
        //     path: '/AdminTracker',
        //     name: 'AdminTracker',
        //     component: AdminTracker
        // },


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

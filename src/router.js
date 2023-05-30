import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import CreateForm from './components/adverseEventReport/CreateForm'
import UpdateForm from './components/adverseEventReport/UpdateForm'
import ViewForm from './components/ViewForm'
import Increments from './components/Increments'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'home',
        component: Home,
        path: '/'
    },
    {
        name: 'login',
        component: Login,
        path: '/login'
    },
    {
        name: 'signup',
        component: Signup,
        path: '/signup'
    },
    {
        name: 'createform',
        component: CreateForm,
        path: '/report/create'
    },
    {
        name: 'updateform',
        component: UpdateForm,
        path: '/report/update/:id'
    },
    {
        name: 'viewform',
        component: ViewForm,
        path: '/report/view'
    },
    {
        name: 'increments',
        component: Increments,
        path: '/increments'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router